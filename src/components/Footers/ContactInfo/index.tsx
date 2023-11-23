import { social } from "./social"

export const ContactInfo = () => {
  return (
    <footer>
      <div className="text-black-500 mt-5 text-center text-sm leading-10">
        Feito com 💙 e carinho pelo Ex Machina
      </div>
      <div className="mt-5 flex justify-center space-x-10">
        {social.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="text-black-500 mt-5 text-center text-sm leading-5">
        &copy; 2023 Ex Machina. All rights reserved.
      </p>
    </footer>
  )
}
