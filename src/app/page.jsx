// changed from page.js to page.jsx per Tim's recommendation
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>LeVar Burton Reads Review Site</h1>
      <h2>
        Welcome! Here we post reviews of episodes from the award-winning
        storytelling podcast LeVar Burton Reads and discuss our hot takes in a
        friendly, non-judgmental way
      </h2>

      <p>
        Confession: I did not have enough time to finish this but you should
        defnitely check out the podcast if you like sci fi. Click on the image
        below to find a link to a really really good time travel story called
        Waystation City.
      </p>
      <Link href="https://open.spotify.com/episode/0lw2qFrgL1U11orDpyynXm">
        {" "}
        <img
          src="geordi.jpg"
          alt="Geordi La Forge from Star Trek played by Levar Burton"
          title="Geordi La Forge from Star Trek played by Levar Burton"
          width={300}
        />
      </Link>
    </div>
  );
}
