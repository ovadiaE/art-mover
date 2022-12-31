import type { AppProps } from 'next/app'
import {wrapper} from '../store/store'
import { Provider } from "react-redux";
import './index.css'

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(wrapper);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}