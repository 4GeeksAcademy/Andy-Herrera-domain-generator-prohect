window.onload = () => {
  const pronouns = ["the", "our"];
  const adjectives = ["great", "big"];
  const nouns = ["jogger", "racoon"];
  const domains = [".com", ".net", ".us", ".io"];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let domain of domains) {
          domainNames.push(`${pronoun}${adjective}${noun}${domain}`);
        }
      }
    }
  }

  const domainContainer = document.getElementById("domainNames");
  domainNames.forEach(domain => {
    const div = document.createElement("div");
    div.className = "domain";
    div.innerText = domain;
    domainContainer.appendChild(div);
  });
};
