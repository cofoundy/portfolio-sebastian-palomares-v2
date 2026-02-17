import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Campañas"
      meta={{ title: "Campañas", desc: "Campañas BTL, activaciones de marca y producción de eventos. Experiencia con Entel, Softys, UNICEF y más." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
