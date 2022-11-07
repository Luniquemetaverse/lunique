import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from '../../header'

const SharedLayout = ({ children, title, className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>VBS | {title}</title>
      </Head>
      <Header />
      <main className={className}>{children}</main>
    </div>
  )
}

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default SharedLayout
