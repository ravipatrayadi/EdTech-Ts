import React from 'react'

interface MentorProps  {}

const MentorPage = (props: MentorProps) => {
  return (    
<section className="main__members members">
    <div className="container">
        <h1 className="members__title title">
            Mentors
        </h1>
        <div className="members__filters-panel filters-panel">
            <div className="filters-panel__tags tags">
                <button className="tags__tag tags__tag--active" id="oneBtn" >
                    All Mentors
                    <span>
                        0
                    </span>
                </button>
                <button className="tags__tag tags__tag" id="twoBtn">
                    My Mentors
                    <span>
                        0
                    </span>
                </button>
            </div>            
            <form className="filters-panel__form filters-panel-form" action="#">
                <div className="filters-panel-form__search search">
                    <button className="search__btn" type="button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4182 19 19 15.4183 19 11C19 6.58172 15.4182 3 11 3C6.58169 3 2.99997 6.58172 2.99997 11C2.99997 15.4183 6.58169 19 11 19Z"
                                  stroke="white" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="white" stroke-width="1.5"
                                  stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <input className="search__input" type="text" placeholder="Search..."/>
                </div>
            </form>
        </div>
        </div>
        </section>
  )
}

export default MentorPage