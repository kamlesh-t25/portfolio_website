import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center flex flex-col gap-7 lg:flex-row justify-between m-7 ">
                <p>&copy; {new Date().getFullYear()} Kamlesh Takhar. All rights reserved.</p>
                {/* <p>Contact: your.email@example.com</p> */}
                <div className="flex justify-center gap-6 mt-2">
                    <a href="https://www.linkedin.com/in/kamlesh-takhar-53921126a/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                    <a href="https://github.com/kamlesh-t25" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                    {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a> */}
                </div>
                {/* <p className="mt-2">Built with passion by Your Name</p> */}
            </div>
    </footer>
  )
}

export default Footer
