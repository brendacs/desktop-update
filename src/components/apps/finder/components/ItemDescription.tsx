import { toImageMap } from '../../../../utils/images'
import { FinderFile } from '../../../../types'
import './ItemDescription.scss'

const images = toImageMap(
  import.meta.glob('../images/*', { eager: true, import: 'default' })
)

const exts = ['css', 'dev', 'js', 'html', 'pdf', 'py', 'vue']
const publicPath = import.meta.env.BASE_URL

function hasValidExtension(name: string | undefined, valid: string[]): boolean {
  if (!name) return false
  const ext = name.split('.')[1]
  if (!ext) return false
  return valid.some((e) => ext.includes(e))
}

interface Props {
  expanded: boolean
  item: Partial<FinderFile>
  onShowClick: () => void
}

export default function ItemDescription({
  expanded,
  item,
  onShowClick,
}: Props) {
  return (
    <div className={`finder-selected-item-wrapper ${!item.name ? 'hide' : ''}`}>
      <div className="finder-selected-item">
        <div className="finder-selected-image">
          <img
            className={`selected-item-image file-${hasValidExtension(item.name, exts)}`}
            src={item.image ? images[item.image] : undefined}
            alt=""
          />
        </div>
        <div className="finder-selected-item-text-container">
          <div className="item-heading">
            <h2>{item.heading}</h2>
            <p className="subtitle">{item.subtitle}</p>
          </div>
          <div className="info-heading">
            <h3>Information</h3>
            <a className="finder-link" onClick={onShowClick}>
              {expanded ? 'Show Less' : 'Show More'}
            </a>
          </div>
          <div className="info-row">
            <p>Created</p>
            <p className="detail">{item.startDate}</p>
          </div>
          <div className="info-row">
            <p>Modified</p>
            <p className="detail">{item.endDate}</p>
          </div>
          <div className={`info-row ${!item.link ? 'hide' : ''}`}>
            <p>Download</p>
            <p className="detail">
              <a
                className="finder-link"
                href={`${publicPath}${item.link}`}
                target="_blank"
                rel="noreferrer"
              >
                file link
              </a>
            </p>
          </div>
          <div className={`info-row ${!item.website ? 'hide' : ''}`}>
            <p>Website</p>
            <p className="detail">
              <a
                className="finder-link"
                href={item.website}
                target="_blank"
                rel="noreferrer"
              >
                external link
              </a>
            </p>
          </div>
          <div className={`info-row ${!item.github ? 'hide' : ''}`}>
            <p>GitHub</p>
            <a
              className="finder-link"
              href={item.github}
              target="_blank"
              rel="noreferrer"
            >
              repository
            </a>
          </div>
          <p className={`description ${!expanded ? 'hide' : ''}`}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}
