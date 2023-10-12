import React from "react";
import styled from 'styled-components';
import SectionText from "./SectionText";
import SubsectionText from "./SubsectionText";

const OverlayContainer = ({ content, isHovered }) => {  
    
    const bgColor = content.color;
    const sections = content.section;

    if (!sections) return null;

    return isHovered ? (
      <Overlay bgcolor={bgColor}>
        <SectionsContainer>
          {sections.map((section, index) => (
            <Section key={index}>
              <SectionText text={section.title} />
              {renderSubSections(section.elements)}
            </Section>
          ))}
        </SectionsContainer>
      </Overlay>
    ) : null;
};

const renderSubSections = (elements) => {
    const maxSubSectionsPerColumn = 5; // Maximum number of subsections per column
    const columns = Math.ceil(elements.length / maxSubSectionsPerColumn);
    
    // Create an array of subsections grouped by columns
    const subsectionsByColumn = Array.from({ length: columns }, (_, columnIndex) => (
        elements.slice(columnIndex * maxSubSectionsPerColumn, (columnIndex + 1) * maxSubSectionsPerColumn)
    ));
    
    return (
        <SubSectionsContainer>
            {subsectionsByColumn.map((column, columnIndex) => (
                <SubSectionColumn key={columnIndex}>
                    {column.map((element, elementIndex) => (
                        <SubSection key={elementIndex}>
                            <SubsectionText subSection={element.subSection} text={element.text}/>
                        </SubSection>
                    ))}
                </SubSectionColumn>
            ))}
        </SubSectionsContainer>
    );
};

const Overlay = styled.div`
  position: absolute;
  left: 0;
  background-color: ${props => props.bgcolor};
  padding: 10px;
  width: 100vw;
  margin-top: 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: white;
`;

const SectionsContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-right: 10px;
`;

const SubSectionsContainer = styled.div`
  display: flex;
`;

const SubSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px; 
  width: 400px;
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export default OverlayContainer;
