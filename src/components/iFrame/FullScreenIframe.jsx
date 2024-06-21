/* eslint-disable-next-line */
const FullScreenIframe = ({ src }) => {
  const iframeStyles = {
    width: '100%',
    height: '100%',
    border: 'none'
  }

  const containerStyles = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  }

  return (
    <div style={containerStyles}>
      <iframe
        src={src}
        title="FullScreen Iframe"
        style={iframeStyles}
        allowFullScreen
      />
    </div>
  )
}

export default FullScreenIframe
