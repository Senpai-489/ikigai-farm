import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY' && API_KEY !== 'MY_GOOGLE_MAPS_KEY';

// Ikigai Farm Location (Approximate Sector 135 Noida coordinates)
const FARM_LOCATION = { lat: 28.5085, lng: 77.4068 };

export default function MapComponent() {
  if (!hasValidKey) {
    return (
      <div className="flex items-center justify-center p-12 bg-zinc-900 border border-zinc-800 text-center min-h-[400px]">
        <div className="max-w-md space-y-6">
          <h2 className="text-xl font-display font-bold text-white uppercase tracking-tighter">Google Maps API Key Required</h2>
          <p className="text-zinc-500 text-sm">To see our interactive location map, please configure your API key.</p>
          <div className="space-y-4 text-left bg-zinc-950 p-6 rounded text-xs text-zinc-400 font-mono">
             <p>1. Get a key at <a href="https://console.cloud.google.com/google/maps-apis/start" target="_blank" className="text-white underline">Google Cloud Console</a></p>
             <p>2. Add secret <code>GOOGLE_MAPS_PLATFORM_KEY</code> in Settings.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px] border border-zinc-800 grayscale">
      <APIProvider apiKey={API_KEY} version="weekly">
        <Map
          defaultCenter={FARM_LOCATION}
          defaultZoom={13}
          mapId="IKIGAI_FARM_MAP"
          gestureHandling="greedy"
          disableDefaultUI={true}
          style={{ width: '100%', height: '100%' }}
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        >
          <AdvancedMarker position={FARM_LOCATION} title="Ikigai Farm, Noida">
            <Pin 
              background={"#000"} 
              glyphColor={"#fff"} 
              borderColor={"#fff"} 
            />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
}
