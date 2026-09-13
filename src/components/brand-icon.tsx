const BrandIcon = () => (
  <>
    <style>{`
      #brand {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 50px;
        font-family: 'Arial Black', 'Bebas Neue', system-ui, sans-serif;
        font-weight: 900;
        font-size: 26px;
        letter-spacing: -1px;
        background: linear-gradient(90deg, #A293FF 0%, #00F0FF 100%);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 4s ease infinite;
        cursor: pointer;
        user-select: none;
        transition: filter 0.3s ease;
      }

      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      #brand:hover {
        animation-play-state: paused;
        filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.7));
      }
    `}</style>

    <div id="brand">AR</div>
  </>
);

export default BrandIcon;