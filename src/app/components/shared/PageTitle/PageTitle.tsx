import './styles.css'

interface IPageTitle {
  title: string
  path: string
}

const PageTitle = ({ title, path }: IPageTitle) => {
  return (
    <div className='content-title'>
      <h1 className='m-0'>{title}</h1>
      <span className='content-path'>{path}</span>
    </div>
  )
}

export default PageTitle
