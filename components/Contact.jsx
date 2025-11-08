import React from 'react'
import { Link, Links } from 'react-router'

const Contact = () => {
  return (
    <div className='box'>
      <div className='details'>
      <h2>📬 Contact Me</h2>
      <p>
        I'm always open to new opportunities, collaborations, or just a good tech conversation! Feel free to reach out via: <br />
        - 📧 Email: <Link>05dhruv1999@email.com</Link> <br />
        - 💼 LinkedIn: <Link>linkedin.com/in/dhruv-profile</Link> <br />
        - 🧑‍💻 GitHub: <a href="https://github.com/dhruv0599" target="blank">dhruv0599</a> <br />
        - 📱 Phone: <Link>+91-XXXXXXXXXX</Link> <br />
        Let’s connect and build something awesome together!
      </p>
      </div>
    </div>
  )
}

export default Contact