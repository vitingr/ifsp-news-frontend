'use client'

import type { FC } from 'react'

import { tinyMceToken } from '@/constants/environments/tinyMce'
import { Editor } from '@tinymce/tinymce-react'

import type { TextEditorProps } from './types'

export const TextEditor: FC<TextEditorProps> = ({ value, onChange }) => {
  return (
    <Editor
      init={{
        plugins:
          'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar:
          'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat'
      }}
      apiKey={tinyMceToken}
      initialValue={value}
      onEditorChange={onChange}
      value={value}
    />
  )
}
