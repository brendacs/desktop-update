import userImage from './images/lakeside-wallpaper-square.jpg'
import './UserApp.scss'

export default function UserApp() {
  return (
    <div className="user-wrapper">
      <div className="user-image-wrapper">
        <img className="user-image" src={userImage} alt="Brenda Zhang" />
      </div>
      <div>
        <h1 className="user-name">
          <span className="bold">Brenda</span> Zhang
        </h1>
        <p className="version">Version 2.3.6</p>
        <p>
          <span className="bold spaced">MacBook Pro (13-inch, 2020)</span>
        </p>
        <p>
          <span className="bold spaced">Processor</span> 2.8 GHz Quad-Core Intel
          Core i7
        </p>
        <p>
          <span className="bold spaced">Memory</span> 16 GB 2133 MHz LPDDR3
        </p>
        <p>
          <span className="bold spaced">Startup Disk</span> Macintosh HD
        </p>
        <p>
          <span className="bold spaced">Graphics</span> Intel Iris Plus Graphics
          655 1536 MB
        </p>
        <p>
          <span className="bold spaced">Serial Number</span> B236Y10Z8RKMQ20
        </p>
        <p>
          <span className="bold spaced">Personal Website </span>
          <a
            className="link"
            href="https://github.com/brendacs/desktop-update"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/brendacs/desktop-update
          </a>
        </p>
        <p>
          <span className="bold spaced">LinkedIn </span>
          <a
            className="link"
            href="https://linkedin.com/in/brendacs"
            target="_blank"
            rel="noreferrer"
          >
            https://linkedin.com/in/brendacs
          </a>
        </p>
        <p>
          <span className="bold spaced">GitHub </span>
          <a
            className="link"
            href="https://github.com/brendacs"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/brendacs
          </a>
        </p>
      </div>
    </div>
  )
}
