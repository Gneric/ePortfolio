import '@/styles/blankTab/style.css'

export default function Linkli({ value, prefix, url, textColor }) {
  return (
      <li>
          <a href={url} className='black-a' target='_blank'>
              <span>{prefix}</span>
              <span style={{ color: textColor }} >{value}</span>
          </a>
      </li>
  )
}
