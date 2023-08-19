/**
 * convert a plane structure with [h2 p h3 p p h3 p p] to [div(h2 div(h3 p p) div(h3 p p))]
 * in order to render cards in place of simple markdown with styles defined in src/css/custom.css
 * @param param0
 * @returns
 */
export function onRouteDidUpdate({ location, previousLocation }): void {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname !== previousLocation?.pathname) {
    const page = document.getElementById('tools');
    if (page == null) {
      return;
    }

    const htmlElements = page.children;

    // Initialize variables to store the current section and subsection
    let currentSection = document.createElement('div');
    let currentCard = document.createElement('div');

    const appendCard = (): void => {
      const anchor: HTMLAnchorElement | null = currentCard.querySelector(
        'a[href]:not([href^="#"])',
      );
      if (anchor != null) {
        currentCard.addEventListener('click', (event) => {
          if ((event?.target as HTMLAnchorElement)?.tagName === 'A') {
            // If it's an anchor tag, let the click event on the anchor proceed as usual
            return;
          }
          anchor.click();
        });
        currentCard.style.cursor = 'pointer';
      }
      currentSection.appendChild(currentCard);
    };

    // Initialize an array to store the parsed divs
    document.createElement('div');

    // Loop through the HTML elements
    for (const element of Array.from(htmlElements)) {
      switch (element.tagName) {
        case 'H2': {
          if (currentCard.children.length > 0) {
            appendCard();
          }
          if (currentSection.children.length > 0) {
            page.appendChild(currentSection);
          }

          currentSection = document.createElement('div');
          currentSection.appendChild(element);
          currentCard = document.createElement('div');
          break;
        }
        case 'H3': {
          if (currentCard.children.length > 0) {
            appendCard();
          }
          currentCard = document.createElement('div');
          currentCard.appendChild(element);
          break;
        }
        default: {
          if (currentCard.children.length === 0) {
            currentSection.appendChild(element);
          } else {
            currentCard.appendChild(element);
          }
        }
      }
    }
  }
}
