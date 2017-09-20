(function() {
  imagesLoaded(document.querySelectorAll('.fragment-wrap'), { background: true }, function() {
    document.body.classList.remove('loading');
    new FragmentsFx(document.getElementById('frag-1'), {
      fragments: 5,
      boundaries: { x1: 200, x2: 100, y1: 10, y2: 50 },
      randomIntervals: {
        top: { min: 0, max: 90 },
        left: { min: 0, max: 90 },
        dimension: {
          width: { min: 5, max: 20, fixedHeight: 5 },
          height: { min: 10, max: 100, fixedWidth: 5 }
        }
      },
      parallax: true
    });
    new FragmentsFx(document.getElementById('frag-2'), {
      fragments: 10,
      boundaries: { x1: 200, x2: 100, y1: 10, y2: 50 },
      randomIntervals: {
        top: { min: 0, max: 90 },
        left: { min: 0, max: 90 },
        dimension: {
          width: { min: 5, max: 20, fixedHeight: 5 },
          height: { min: 10, max: 100, fixedWidth: 5 }
        }
      },
      parallax: true
    });
    new FragmentsFx(document.getElementById('frag-3'), {
      fragments: 15,
      boundaries: { x1: 100, x2: 300, y1: 0, y2: 0 },
      randomIntervals: {
        top: { min: 0, max: 90 },
        left: { min: 0, max: 90 },
        dimension: {
          width: { min: 50, max: 100, fixedHeight: 0.5 },
          height: { min: 50, max: 100, fixedWidth: 0.5 }
        }
      },
      parallax: true
    });
    new FragmentsFx(document.getElementById('frag-4'), {
      fragments: 20,
      boundaries: { x1: 250, x2: 75, y1: 50, y2: 50 },
      randomIntervals: {
        top: { min: 0, max: 90 },
        left: { min: 0, max: 90 },
        dimension: {
          width: { min: 30, max: 50, fixedHeight: 10 },
          height: { min: 30, max: 50, fixedWidth: 10 }
        }
      },
      parallax: true
    });
    new FragmentsFx(document.getElementById('frag-5'), {
      fragments: 25,
      boundaries: { x1: 50, x2: 300, y1: 0, y2: 0 },
      randomIntervals: {
        top: { min: 0, max: 40 },
        left: { min: 0, max: 90 },
        dimension: {
          width: { min: 10, max: 50, fixedHeight: 0.5 },
          height: { min: 5, max: 10, fixedWidth: 5 }
        }
      },
      parallax: true,
      randomParallax: { min: 30, max: 300 }
    });
  });
})();
