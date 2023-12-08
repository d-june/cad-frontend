import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import ImageTool  from "@editorjs/image"
export const EDITOR_TOOLS = {
  code: Code,
  header: Header,
  paragraph: {Paragraph, inlineToolbar: true},
  list: List,
  image: ImageTool
};