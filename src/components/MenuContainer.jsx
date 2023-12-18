import React from "react";
import styled from "styled-components";
import SubsectionText from "./SubsectionText";

const MenuContainer = ({ content, tab, setShowMobileNavbar }) => {

    const sections = content.section;
    if (!sections) return null;
    return (
        <SectionsContainer >
            {sections.map((section, index) => (
                <Section key={index}>
                    <SubSectionsContainer>
                        {section.elements.map((element, elementIndex) => (
                            <SubSection key={elementIndex} >
                                <SubsectionText tab={tab} subSection={element.subSection} text={element.text} setShowMobileNavbar={setShowMobileNavbar} />
                            </SubSection>
                        ))}
                    </SubSectionsContainer>
                </Section>
            ))}
        </SectionsContainer>
    )
}

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 0.6em;
  padding: 0 4em 2em 4em;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubSectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MenuContainer;
