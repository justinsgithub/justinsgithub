import React from 'react'
import {useState} from 'react'
import styles from './Button.module.css'

const HtmlSkel = () => {
    return (

    <div>
        <header>
            <h1>header</h1>
        </header>
        <nav>
            <ul>
                <li>
                <a href="#introduction"> Introduction </a>
                </li>
                <li>
                <a href="#secion2"> Section 2 </a>
                </li>
                <li>
                <a href="#media"> Media </a>
                </li>
            </ul>
        </nav>
        <main>
        <div id="introduction">
        <h2>subheader</h2>
        <p>
        HTML is the skeleton of a webpage, this is a paragraph.
        HTML is the skeleton of a webpage, this is a paragraph.
        HTML is the skeleton of a webpage, this is a paragraph.
        HTML is the skeleton of a webpage, this is a paragraph.
        </p>
        <h3>sub-subheader</h3>
        <ul>
        <li>unordered list item 1</li>
        <li>unordered list item 2</li>
        <li>unordered list item 3</li>
        <li>unordered list item 4</li>
        </ul>
        <h3>sub-subheader</h3>
        <p>
        HTML is the skeleton of a webpage, this is a paragraph.
        HTML is the skeleton of a webpage, this is a paragraph.
        HTML is the skeleton of a webpage, this is a paragraph.
        HTML is the skeleton of a webpage, this is a paragraph.
        </p>
        </div>
        <div id="section2">
        <h2>subheader</h2>
        <h3>sub-subheader</h3>
        <ol>
          <li>ordered list item 1</li>
          <li>ordered list item 2</li>
          <li>ordered list item 3</li>
        </ol>
        <h3>sub-subheader</h3>
        <p>
        HTML is the skeleton of a webpage, this is a paragraph.
        HTML is the skeleton of a webpage, this is a paragraph.
        HTML is the skeleton of a webpage, this is a paragraph.
        HTML is the skeleton of a webpage, this is a paragraph.
        </p>
        </div>
    </main>
        <div id="media">
        <h2>subheader</h2>
        <img src="https://content.codecademy.com/courses/web-101/web101-image_brownbear.jpg" alt="A Picture"/>
        <video src="https://content.codecademy.com/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4" width="320" height="240" controls>
        Video not supported
          </video>
        </div>
    </div>
    )
}

const HtmlExample = () => {
     const initialHtmlState = {
    showing: false,
  }

    const [html, setHtml] = useState(initialHtmlState)

    const handleClick = () =>{
        setHtml({ showing: !html.showing })
    }

  return (
      <div>
      <button className={styles.button} onClick={handleClick}>
      {!html.showing && 'Show Rendered'}{html.showing && 'Hide Rendered'}
      </button>
               { html.showing && <HtmlSkel />}
      </div>
  )
}
export default HtmlExample