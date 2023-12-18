const StartTestButton = ({ className, children }) => {
    return (
        <div className={`mt-10 2xl:px-10 xl:px-10 lg:px-6 py-6 rounded-sm bg-gradient-to-r from-[#CD1223] to-[#66151C] flex justify-center items-center ${className}`}>
            {children}
        </div>
    )
}

export default StartTestButton