const faders = document.querySelectorAll(".fade-in");

const sectionOneOptions = {
  threshold: 0.1,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      sectionOneObserver.unobserve(entry.target);
    }
  });
},
sectionOneOptions);

faders.forEach((fader) => {
  sectionOneObserver.observe(fader);
});

const section2Faders = document.querySelectorAll(".section-2");
const sliders = document.querySelectorAll(".slide-in");
const fColumns = document.querySelectorAll(".f-col");

const sectionTwoOptions = {
  threshold: 0,
};

const sectionTwoObserver = new IntersectionObserver(function (
  entries,
  sectionTwoObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      sectionTwoObserver.unobserve(entry.target);
    }
  });
},
sectionTwoOptions);

section2Faders.forEach((fader) => sectionTwoObserver.observe(fader));
sliders.forEach((slider) => sectionTwoObserver.observe(slider));
fColumns.forEach((col) => sectionTwoObserver.observe(col));
