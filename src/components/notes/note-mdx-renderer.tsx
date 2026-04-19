"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

import { noteMdxComponents } from "@/components/notes/mdx-components";
import type { NoteFrontmatter } from "@/types/notes";

type NoteMdxRendererProps = {
  source: MDXRemoteSerializeResult<NoteFrontmatter>;
};

export function NoteMdxRenderer({ source }: NoteMdxRendererProps) {
  return <MDXRemote {...source} components={noteMdxComponents} />;
}
