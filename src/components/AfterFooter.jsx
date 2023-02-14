import "./mainCompnents.css";
import { SocialLinks } from "../data";

const AfterFooter = () => {
  return (
    <div className="after-footer py-5 bg-black text-center">
      <div className="container">
        <ul className="social-links d-flex justify-content-center align-items-center">
          {SocialLinks.map((socialItem) => {
            return (
              <li key={socialItem.id} className={socialItem.class}>
                <a rel="noreferrer" href={socialItem.path} target="_blank">
                  {socialItem.icon}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright secondary-font mt-4 mb-0 fw-bold fs-6">
          <span>&copy;</span> All Rights Reserved. Coded by <span>Ahmed Elbahy</span>
        </p>
      </div>
    </div>
  );
};

export default AfterFooter;
