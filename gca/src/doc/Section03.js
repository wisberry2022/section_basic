const Section03 = () => {
  return (
    <section className="Business02 basic_section">
      <h2>
        <span>OUR</span> BUSINESS
      </h2>
      <p>
        그린컴퓨터아카데미의 다양한 강의를 소개합니다
      </p>
      <div className="container">
        <div className="left">
          <figure>
            <img src="./image/slide_01.jpg" alt="" />
          </figure>
        </div>
        <div className="right">
          <h3>심플하지만 다 갖춘 그린컴퓨터아카데미</h3>
          <p>국비지원교육 관련 궁금하신 사항은 언제든지 문의바랍니다</p>

          <ul className="dotList">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>

          <div className="bottom">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Numquam necessitatibus blanditiis corrupti,unde est vero quo ipsum repellendus harum rerum!
          </div>
        </div>
      </div>
      <div className="inner">
        <h3>심플하지만 다 갖춘 그린컴퓨터아카데미</h3>
        <ul className="row">
          <li data-num="01">Lorem ipsum dolor sit amet consectetur.</li>
          <li data-num="02">Lorem ipsum dolor sit amet consectetur.</li>
          <li data-num="03">Lorem ipsum dolor sit amet consectetur.</li>
          <li data-num="04">Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
      </div>
    </section>
  )
}

export default Section03;