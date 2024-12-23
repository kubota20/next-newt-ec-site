"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// zod & formHook
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// toast
import toast from "react-hot-toast";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "2文字以上入力してください",
    })
    .max(16, { message: "16文字以内で入力してください" }),
  email: z
    .string()
    .min(1, { message: "メールアドレスは必須" })
    .email({ message: "メールアドレスの形式が正しくない" }),
  message: z
    .string()
    .min(10, { message: "10以上を入力してください" })
    .max(160, { message: "160文字以内で入力してください" }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();

      // フォームデータに値を追加
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(
        process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT ?? "",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setLoading(true);
        router.push("/");
        toast.success("送信しました");
      } else {
        router.push("/contact");
        toast.error("送信に失敗しました。もう一度入力して下さい。");
      }
    } catch (error) {
      toast.error("送信エラー");
      console.log("送信エラー:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-80 sm:w-96">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>名前</FormLabel>
                <FormControl>
                  <Input placeholder="名前" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input placeholder="メールアドレス" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>お問い合わせ内容</FormLabel>
                <FormControl>
                  <Textarea placeholder="お問い合わせ" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-center">
            <Button
              type="submit"
              className="border text-white bg-black"
              disabled={loading}
            >
              {loading ? "送信中..." : "送信"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
