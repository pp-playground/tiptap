"use client"

import './style.scss'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    // content: ``,
  })

  return (
    <EditorContent editor={editor} />
  )
}