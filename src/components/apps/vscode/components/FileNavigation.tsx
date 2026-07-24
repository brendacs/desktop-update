import FileItem from './FileItem'
import FolderItem from './FolderItem'
import './FileNavigation.scss'

interface Props {
  files: string[]
  folders: string[]
  vscodeData: Record<string, unknown>
}

export default function FileNavigation({ files, folders, vscodeData }: Props) {
  return (
    <div className="filebar">
      <div className="filebar-explorer">
        <p className="text">EXPLORER</p>
      </div>
      <div className="open">
        <div className="filebar-header" />
        {files.map((file, key) => (
          <FileItem key={key} itemName={file} itemType="file" />
        ))}
      </div>
      <div className="files">
        <div className="filebar-header" />
        {folders.map((folder, key) => (
          <FolderItem
            key={key}
            files={vscodeData[folder]}
            itemName={folder}
            itemType="file"
          />
        ))}
        {files.map((file, key) => (
          <FileItem key={key} itemName={file} itemType="file" />
        ))}
      </div>
    </div>
  )
}
