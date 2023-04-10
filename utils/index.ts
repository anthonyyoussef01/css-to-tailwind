import { toast } from 'react-toastify'
import Clipboard from 'clipboard'

export const copyText = (str: string) => {
  if (str == '') {
    toast.warn('No Result', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return
  }
  
  const fakeElement = document.createElement('button')
  const clipboard = new Clipboard(fakeElement, {
    text: () => str || '',
    action: () => 'copy',
  })
  clipboard.on('success', (e) => {
    clipboard.destroy()
    toast.success('Copy Success!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  })
  clipboard.on('error', (e) => {
    clipboard.destroy()
    toast.error('Copy Error!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  })
  document.body.appendChild(fakeElement)
  fakeElement.click()
  document.body.removeChild(fakeElement)
}