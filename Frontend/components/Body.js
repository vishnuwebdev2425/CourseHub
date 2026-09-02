import RatingCards from "./Ratingcards";

const Body = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <h1>Learn...Practise...Groww..Succedd</h1>
          <button>Register Now</button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/djcslopvv/image/upload/v1769710902/progress-removebg-preview_aqoj6y.png"
            alt="no-image"
          />
        </div>
      </div>

      <div>
        <h1>Master Zaint Technology With Us</h1>
        <div className="flex flex-row justify-between">
          <div>
            <img
              src="https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg"
              alt="web-development"
            />
            <h1>Web Development</h1>
            <a
              href="https://en.wikipedia.org/wiki/Web_development"
              target="_blank"
            >
              <button>Get More Info</button>
            </a>
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/022/745/285/small_2x/artificial-intelligence-ai-on-the-big-data-network-big-data-and-financial-banking-businessman-working-on-digital-smartphone-coding-programming-mobile-app-development-web-icon-computer-code-photo.jpg"
              alt="Atrficial-Intelligence"
            />
            <h1>Artificial-Intelligence</h1>
            <a
              href="https://en.wikipedia.org/wiki/Artificial_intelligence"
              target="_blank"
            >
              <button>Get More Info</button>
            </a>
          </div>
          <div>
            <img
              src="https://assets.techrepublic.com/uploads/2023/03/Figure.B.DevOps.jpeg"
              alt="Devops"
            />
            <h1>Devops</h1>
            <a href="https://de.wikipedia.org/wiki/DevOps" target="_blank">
              <button>Get More Info</button>
            </a>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img
              src="https://wallpapers.com/images/featured/data-science-xe1pmo7wm4jcokpd.jpg"
              alt="Data-Science"
            />
            <h1>DataScience</h1>
            <a
              href="https://en.wikipedia.org/wiki/Data_science#HeroSection"
              target="_blank"
            >
              <button>Get More Info</button>
            </a>
          </div>
          <div>
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.KqpjKBcoqh2SHCTWGRgW7gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="automation-testing"
            />
            <h1>Automation Testing</h1>
            <a
              href="https://en.wikipedia.org/wiki/Test_automation"
              target="_blank"
            >
              <button>Get More Info</button>
            </a>
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/041/855/918/small_2x/security-shield-cyber-security-shield-with-lock-with-keyhole-cyber-data-protection-background-with-circuit-board-connections-and-tech-icons-wireframe-hand-pressing-button-illustration-vector.jpg"
              alt="Cyber-Security"
            />
            <h1>Cyber-Security</h1>
            <a
              href="https://en.wikipedia.org/wiki/Computer_security"
              target="_blank"
            >
              <button>Get More Info</button>
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <img
              src="https://quizizz.com/_optimized/_media/quizzes/40044a07-3406-4baf-b225-903137d66218.webp"
              alt="DSA"
            />
            <h1>DSA-Data Structure And Algorith</h1>
            <a
              href="https://en.wikipedia.org/wiki/Data_structure"
              target="_blank"
            >
              <button>Get More Info</button>
            </a>
          </div>
          <div>
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*fiDtz6XcrQN5RVk6mnt7lA.png"
              alt="System-Design"
            />
            <h1>System Design</h1>
            <a
              href="https://en.wikipedia.org/wiki/Systems_design"
              target="_blank"
            >
              <button>Get More Info</button>
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-center font-bold">Why Choose Us</h1>
          <div className="flex flex-row">
            <div>
              <img src="https://res.cloudinary.com/djcslopvv/image/upload/v1764480352/U-removebg-preview_q7pf73.png"
              alt="Why Choose Us Image" />
            </div>
            <div>
              <h3>
                We Provided the High Premium Courses Which is Highly Available
                And Higly Rated Courses
              </h3>
            </div>
          </div>
        </div>
        <RatingCards/>
      </div>
    </div>
  );
};


export default Body;