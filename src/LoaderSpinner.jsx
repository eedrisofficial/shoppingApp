import { Puff } from 'react-loader-spinner'

export const LoaderSpinner = () => {
  return (
    <>
    <Puff
        height="80"
        width="80"
        radius={1}
        color="#00203FFF"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        </>
  )
}
