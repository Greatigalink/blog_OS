import { useEffect } from 'react'
import { dayOrNight } from "../../../api/export"
import hljs from "highlight.js"
import 'highlight.js/styles/atom-one-dark.css';
import styles from './markdown.module.scss'

export default function MarkDown({content, clock}) {
  
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      try {
        hljs.highlightBlock(block);
      } catch (error) {
        console.log(error);
      }
    });
  }, [])

  return(
    <div className={styles.markdown} style={dayOrNight("markdown", clock)}>
      <div id="markdown" dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  )
}