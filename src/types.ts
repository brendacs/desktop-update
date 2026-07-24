export interface FinderFolder {
  id: string
  name: string
  image: string
}

export interface FinderFile {
  id: string
  name: string
  image: string
  heading: string
  subtitle: string
  startDate: string
  endDate: string
  description: string
  link: string
  github: string
  website: string
}

export interface FinderData {
  folders: Record<string, FinderFolder>
  items: Record<string, Record<string, FinderFile>>
}

export interface AppMeta {
  id: string
  name: string
  title?: string
}
