import FileItem from './FileItem'
import './TextEditor.scss'

interface Props {
  files: string[]
}

export default function TextEditor({ files }: Props) {
  return (
    <div className="editor">
      <div className="tabs">
        {files.map((file, key) => (
          <FileItem key={key} itemName={file} itemType="tab" />
        ))}
      </div>
      <div className="breadcrumb-bar" />
      <div className="text" />
    </div>
  )
}
