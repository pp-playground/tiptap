"use client"

import { Editor } from '@tiptap/core';
import { Markdown } from 'tiptap-markdown';
import StarterKit from '@tiptap/starter-kit'

export default function Page(){
  const markdown = `
  # タイトル
  
  これは *Markdown* のテストです。
  `
  
  const editor = new Editor({
    content: "# title",
    extensions: [
      StarterKit,
      Markdown,
    ],
  });
  const markdownOutput = editor.storage.markdown.getMarkdown();
  
  console.log(markdownOutput);
}