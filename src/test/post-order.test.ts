/**
 * SaveOrder 関数 が Firebase 操作（ドキュメントの追加）を正しく行い、
 * エラーハンドリングが適切に機能するかを確認するためのテストコードです
 */

import { describe, it, vi, expect } from "vitest";
import { SaveOrder } from "@/actions/post-order";
import {
  addDoc,
  collection,
  DocumentReference,
  DocumentData,
  CollectionReference,
} from "firebase/firestore";

// Firebaseメソッドをモック
vi.mock("firebase/firestore", () => ({
  addDoc: vi.fn(),
  collection: vi.fn(),
  getFirestore: vi.fn().mockReturnValue({}), // getFirestore をモック
}));

describe("SaveOrder", () => {
  const mockOrderData = {
    name: "Test User",
    email: "test@example.com",
    items: [
      { title: "Product 1", price: 100 },
      { title: "Product 2", price: 200 },
    ],
    totalPrice: 300,
    createdAt: new Date(),
  };

  it("addDocを正しいパラメータで呼び出せました!", async () => {
    // DocumentReferenceのモック
    const mockedDocRef: DocumentReference<DocumentData> = {
      id: "mocked-document-id",
      firestore: {} as any, // firestoreのプロパティをモック
      path: "mocked-path", // pathを追加
      converter: {} as any, // 空のオブジェクトを代入
      type: "document",
      parent: {} as any, // parentをモック
      withConverter: vi.fn().mockReturnThis(), // withConverterメソッドをモック
    };

    // CollectionReferenceのモック
    const mockedCollectionRef: CollectionReference<DocumentData> = {
      id: "mocked-collection-id",
      firestore: {} as any,
      path: "orders", // コレクションのパス
      parent: null, // 親コレクションがない場合はnull
      type: "collection", // コレクションタイプ
      converter: {} as any, // 空のオブジェクトを代入
      withConverter: vi.fn().mockReturnThis(), // withConverterをモック
    };

    // Firebaseモック関数の型を明示的にキャスト
    vi.mocked(addDoc).mockResolvedValueOnce(mockedDocRef);
    vi.mocked(collection).mockReturnValueOnce(mockedCollectionRef);

    await SaveOrder(mockOrderData);

    // 検証
    expect(collection).toHaveBeenCalledWith(expect.any(Object), "orders");
    expect(addDoc).toHaveBeenCalledWith(mockedCollectionRef, mockOrderData);
    expect(addDoc).toHaveBeenCalledTimes(1);
  });

  it("エラーが発生した場合に適切に処理できました！", async () => {
    const errorMessage = "テストエラー";

    vi.mocked(addDoc).mockRejectedValueOnce(new Error(errorMessage));

    await expect(SaveOrder(mockOrderData)).rejects.toThrow(errorMessage);
  });
});
