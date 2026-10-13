import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import { projects, pageHead } from '@/lib/portfolio-data';
export const Route = createFileRoute('/work')({head:()=>pageHead('My work','Explore DigiSakhi, Kindling, computational music research and student-led innovation by Mehak.'),component:Work});
function Work(){const [filter,setFilter]=useState('All work');return <main className="site-width enter"><div className="page-top"><div className="eyebrow">Ideas into action</div><h1>Built with purpose.</h1><p>From digital empowerment to family connection, each project starts with a question about how things could be better.</p></div><div className="filters" aria-label="Filter projects">{['All work','Technology','Social impact','Research'].map(f=><Button key={f} variant={f===filter?'default':'outline'} onClick={()=>setFilter(f)} aria-pressed={f===filter}>{f}</Button>)}</div><section className="project-grid pb-20">{projects.filter(p=>filter==='All work'||p.category===filter).map(p=><ProjectCard key={p.id} project={p}/>)}</section></main>;}