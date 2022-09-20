import React, { useState } from "react";
import "./styles.css";

var booksDictionary = {
  GreekFiction: [
    {
      name: "Percy Jackson Series",
      rating: "⭐⭐⭐⭐ 4.5/5",
      description:
        "written by Rick Riordan, it is a pentalogy of 5 books. Adventure this book."
    },
    {
      name: "Heroes of Olympus Series",
      rating: "⭐⭐⭐⭐⭐ 5/5",
      description:
        "written by Rick Riordan, it is a pentalogy of 5 books. Takes your excitement to newer levels."
    },
    {
      name: "Circe",
      rating: "⭐⭐⭐⭐⭐ 5/5",
      description:
        "written by Madeline Miller. just touched my heart. Go for it!"
    },
    {
      name: "Song of Achilles",
      rating: "⭐⭐⭐⭐ 4.5/5",
      description: "written by Madeline Miller. Love overcomes all."
    }
  ],
  RomanceFriendship: [
    {
      name: "Where Rainbows End",
      rating: "⭐⭐⭐⭐ 4.5/5",
      description:
        "written by Cecelia Ahern. It's never too late for true love."
    },
    {
      name: "The Year I met you",
      rating: "⭐⭐⭐⭐⭐ 5/5",
      description: "written by Cecelia Ahern. A lovely story about Friendship."
    },
    {
      name: "Vision in White",
      rating: "⭐⭐⭐⭐ 4.5/5",
      description:
        "written by Nora Roberts, Part 1 of bride-quartet series. Four friends that plan weddings meet real love."
    },
    {
      name: "Everything Everything",
      rating: "⭐⭐⭐⭐ 4/5",
      description:
        "written by Nicola Yoon, experience freedom after a life-long entrapment."
    }
  ],
  Mystery: [
    {
      name: "Angels and Demons",
      rating: "⭐⭐⭐⭐⭐ 5/5",
      description:
        "written by Dan Brown, delves into different realms of the world."
    },
    {
      name: "The Da Vinci Code",
      rating: "⭐⭐⭐⭐⭐ 5/5",
      description: "written by Dan Brown, controversial yet an ecstatic read."
    }
  ],
  Fiction: [
    {
      name: "Kane and Abel",
      rating: "⭐⭐⭐⭐⭐ 5/5",
      description:
        "written by Jeffery Archer, a classic to bring you a ton of emotions and knowledge."
    },
    {
      name: "To Kill a Mockingbird",
      rating: "⭐⭐⭐⭐⭐ 4.5/5",
      description:
        "written by Harper Lee, it brings nostalgia, comedy, and explores dark realities."
    },
    {
      name: "The Alchemist",
      rating: "⭐⭐⭐⭐ 4.5/5",
      description: "written by Paulo Coelho, chase your dreams."
    },
    {
      name: "Brida",
      rating: "⭐⭐⭐⭐ 4/5",
      description:
        "written by Paulo Coelho, discover nature, wisdom and spirituality."
    },
    {
      name: "Shiva Trilogy",
      rating: "⭐⭐⭐⭐⭐ 5/5",
      description:
        "written by Amish Tripathi. It is a Triology that explores deep concepts. It's LOVE."
    }
  ],
  SelfHelp: [
    {
      name: "Who Moved My Cheese?",
      rating: "⭐⭐⭐⭐ 4/5",
      description: "written by Spencer Johnson, a very simple and smart read."
    },
    {
      name: "The subtle art of not giving a f*ck",
      rating: "⭐⭐⭐⭐ 4/5",
      description:
        "written by Mark Manson, stop worrying about what others think."
    }
  ],
  Biography: [
    {
      name: "Eat Pray Love",
      rating: "⭐⭐⭐⭐⭐ 5/5",
      description:
        "written by Elizabeth Gilbert, travel around the world and embark on a journey of hope."
    },
    {
      name: "The Diary of a Young Girl",
      rating: "⭐⭐⭐⭐ 4/5",
      description:
        "written by Anne Frank, Holocaust from a teenage girl's perspective."
    }
  ]
};

export default function App() {
  var genresWeKnow = Object.keys(booksDictionary);
  var [genreClicked, setGenreClicked] = useState("GreekFiction");
  var listOfBooks = booksDictionary[genreClicked];

  function genreClickHandler(genre) {
    var genreClicked = booksDictionary[genre];
    setGenreClicked(genre);
  }

  return (
    <div className="App">
      <h1>Look for a Book📖</h1>

      <div>
        {genresWeKnow.map((genre) => {
          return (
            <span key={genre}>
              <button onClick={() => genreClickHandler(genre)}>{genre}</button>
            </span>
          );
        })}
      </div>

      <ul>
        {listOfBooks.map((booksDictionary) => {
          return (
            <li className="list" key={booksDictionary.name}>
              <h2 className="name">{booksDictionary.name}</h2>
              <small className="description">
                {booksDictionary.description}
              </small>
              <p>{booksDictionary.rating}</p>
            </li>
          );
        })}
      </ul>
      <footer className="footer">
        <div className="footer-heading">Come find me on</div>
        <ul className="list-non-bullet">
          <li className="list-item-inline">
            <a
              className="link"
              href="https://github.com/amulyaparab"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/amulyaparab"
              target="_blank"
            >
              linkedIn
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://twitter.com/AmulyaParab"
              target="_blank"
            >
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
