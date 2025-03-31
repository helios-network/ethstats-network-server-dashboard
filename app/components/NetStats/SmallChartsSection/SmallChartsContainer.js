import styled from 'styled-components';

const SmallChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  box-sizing: border-box;

  > * {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    transition: all 0.2s ease;
    position: relative;
    border: 1px solid #e2e8f0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: visible;
    display: flex;
    flex-direction: column;
    min-width: 0;

    &:hover {
      border-color: #cbd5e1;
      background: #f8fafc;
    }

    /* Style spécifique pour la carte */
    &:last-child {
      padding: 0;
      grid-column: 1 / -1;

      .map-container {
        width: 100%;
        height: 100%;
        min-height: 300px;

        /* Styles pour la carte */
        .leaflet-container {
          background: #1a1a1a;
        }

        .leaflet-tile {
          filter: invert(1) hue-rotate(180deg) brightness(0.8) contrast(1.2);
        }

        /* Style pour les marqueurs */
        .leaflet-marker-icon {
          background-color: #3b82f6;
          border: 2px solid #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        .leaflet-marker-icon::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          background-color: #ffffff;
          border-radius: 50%;
        }

        /* Style pour les bulles de la datamap */
        .datamaps-bubble {
          fill:rgb(255, 255, 255) !important;
          stroke: #ffffff !important;
          stroke-width: 2 !important;
          filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.5));
          fill: #FFF !important;
        }

        .datamaps-bubble:hover {
          fill: #60a5fa !important;
          filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.7));
        }

        .leaflet-control-container {
          .leaflet-control-zoom {
            border: 1px solid #333;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          }

          .leaflet-control-zoom-in,
          .leaflet-control-zoom-out {
            background: #333;
            color: #ffffff;
            border-bottom: 1px solid #444;

            &:hover {
              background: #444;
            }
          }
        }

        .leaflet-popup-content-wrapper {
          background: #333;
          color: #ffffff;
        }

        .leaflet-popup-tip {
          background: #333;
        }
      }
    }

    /* Style pour les titres */
    h3, h4 {
      color: #1e293b;
      font-weight: 600;
      margin: 0 0 16px 0;
      font-size: 1rem;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;
      padding-bottom: 12px;
      border-bottom: 1px solid #e2e8f0;
    }

    /* Style pour les valeurs */
    .value {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
      letter-spacing: -0.02em;
      margin-bottom: 4px;
    }

    /* Style pour les labels */
    .label {
      color: #64748b;
      font-size: 0.875rem;
      letter-spacing: -0.01em;
    }
  }

  @media (max-width: 1920px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export default SmallChartsContainer;

