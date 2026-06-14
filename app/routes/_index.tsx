import { Sparkles, MessageSquare, Terminal, ShieldAlert, Image as ImageIcon } from "lucide-react";

export default function Index() {
  const characters = [
    { id: '1', name: 'Fable (Deer)', thumbnail_url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=300&h=300&q=80', rules_summary: 'Gore OK, mechanical parts NO. (EXAMPLE)' },
    { id: '2', name: 'Bones the Bard', thumbnail_url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=300&h=300&q=80', rules_summary: 'Apparel alterations welcomed. (EXAMPLE)' },
    { id: '3', name: 'Mallow-Bot', thumbnail_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&h=300&q=80', rules_summary: 'Keep colors neon! (EXAMPLE)' }
  ];

  const attacks = [
    { id: '1', attacker_name: 'Goblincore', target_name: 'PencilWitch', character_name: 'Fable (Deer)', image_url: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&h=400&q=80', points: 45 },
    { id: '2', attacker_name: 'PencilWitch', target_name: 'Goblincore', character_name: 'Bones the Bard', image_url: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=500&h=400&q=80', points: 60 }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#141517', color: '#e2e8f0' }}>
      <nav className="px-4 py-2.5 flex items-center justify-between text-xs sticky top-0 z-50" style={{ backgroundColor: '#1b1d20', borderBottom: '1px solid #2a2e33' }}>
        <div className="flex items-center gap-6">
          <span className="font-bold tracking-wider flex items-center gap-1.5" style={{ color: '#38bdf8' }}>
            <Sparkles className="w-3.5 h-3.5" /> SKRAFFLE.net
          </span>
          <div className="hidden md:flex items-center gap-4" style={{ color: '#8892b0' }}>
            <a href="#gallery" className="hover:text-white hover:underline">[ Gallery ]</a>
            <a href="#characters" className="hover:text-white hover:underline">[ Characters ]</a>
            <a href="#activity" className="hover:text-white hover:underline">[ Recent Trades ]</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span style={{ color: '#8892b0' }}>User: <span style={{ color: '#4ade80' }}>guest_artist</span></span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <section className="p-4 rounded-sm" style={{ backgroundColor: '#1b1d20', border: '1px solid #2a2e33' }}>
            <div className="pb-2 mb-3 flex items-center gap-2 text-xs font-bold" style={{ borderBottom: '1px solid #2a2e33', color: '#8892b0' }}>
              <Terminal className="w-4 h-4" style={{ color: '#38bdf8' }} />
              <span>// DIRECTIVE_NOTICE_BOARD</span>
            </div>
            <p className="text-sm leading-relaxed">
              Welcome to Skraffle. This is a perpetual digital sketchbook and relaxed art trade community. 
              Claim characters below, generate art interactions, and track point exchanges without deadlines.
            </p>
          </section>

          <section id="characters" className="p-4 rounded-sm" style={{ backgroundColor: '#1b1d20', border: '1px solid #2a2e33' }}>
            <div className="pb-2 mb-4 flex items-center justify-between text-xs font-bold" style={{ borderBottom: '1px solid #2a2e33', color: '#8892b0' }}>
              <span className="flex items-center gap-1.5"><ImageIcon className="w-3.5 h-3.5" /> RECENT ROSTER UPDATES</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {characters.map((char) => (
                <div key={char.id} className="p-2 rounded-sm flex flex-col justify-between" style={{ backgroundColor: '#141517', border: '1px solid #2a2e33' }}>
                  <div>
                    <div className="aspect-square w-full overflow-hidden bg-black mb-2" style={{ border: '1px solid #2a2e33' }}>
                      <img src={char.thumbnail_url} alt={char.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xs font-bold truncate mb-1">{char.name}</h3>
                    <p className="text-[11px] leading-tight line-clamp-2 italic mb-2" style={{ color: '#8892b0' }}>
                      "{char.rules_summary}"
                    </p>
                  </div>
                  <button className="w-full text-center text-[10px] py-1 tracking-tight" style={{ backgroundColor: '#1b1d20', border: '1px solid #000', color: '#38bdf8' }}>
                    Draw Character
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <section id="activity" className="p-4 rounded-sm flex-1" style={{ backgroundColor: '#1b1d20', border: '1px solid #2a2e33' }}>
            <div className="pb-2 mb-3 flex items-center gap-1.5 text-xs font-bold" style={{ borderBottom: '1px solid #2a2e33', color: '#8892b0' }}>
              <MessageSquare className="w-3.5 h-3.5" style={{ color: '#4ade80' }} />
              <span>LIVE EXCHANGE STREAM</span>
            </div>

            <div className="space-y-3">
              {attacks.map((attack) => (
                <div key={attack.id} className="p-2 rounded-sm text-xs" style={{ backgroundColor: '#141517', border: '1px solid #2a2e33' }}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-bold truncate max-w-[70%]">
                      <span style={{ color: '#38bdf8' }}>{attack.attacker_name}</span> attacked <span style={{ color: '#f87171' }}>{attack.target_name}</span>
                    </span>
                    <span className="px-1.5 py-0.5 rounded-sm text-[10px] font-mono" style={{ backgroundColor: '#2a2e33', color: '#4ade80' }}>
                      +{attack.points}pts
                    </span>
                  </div>
                  <div className="aspect-[4/3] w-full bg-black overflow-hidden mb-1" style={{ border: '1px solid #2a2e33' }}>
                    <img src={attack.image_url} alt="Trade Content" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] block truncate" style={{ color: '#8892b0' }}>Target Character: {attack.character_name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
