import { LayoutDashboard, Users, ShoppingBag, PieChart, ExternalLink, Plus } from 'lucide-react';

export default function PractitionerDashboard() {
    const patients = [
        { name: 'Elena Vance', condition: 'Liver Qi Stagnation', lastConsult: '2 days ago', status: 'Active' },
        { name: 'Marcus Aurelius', condition: 'Kidney Yin Deficiency', lastConsult: '1 week ago', status: 'Pending' },
        { name: 'Sarah Chen', condition: 'Spleen Dampness', lastConsult: '3 hours ago', status: 'Active' }
    ];

    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar Nav */}
                    <div className="w-full md:w-64 space-y-2">
                        <div className="p-6 mb-8">
                            <span className="text-primary font-display text-2xl tracking-tighter">Practitioner Portal</span>
                            <p className="text-[10px] text-primary/40 uppercase tracking-widest mt-1">Authorized Access Only</p>
                        </div>
                        {[
                            { icon: LayoutDashboard, label: 'Overview', active: true },
                            { icon: Users, label: 'Patient List' },
                            { icon: ShoppingBag, label: 'Prescription Carts' },
                            { icon: PieChart, label: 'Analytics' }
                        ].map((item, i) => (
                            <button key={i} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${item.active ? 'bg-primary text-beige' : 'text-primary/60 hover:bg-primary/5'
                                }`}>
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm font-medium tracking-wide">{item.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 bg-white rounded-[2.5rem] border border-primary/5 p-8 md:p-12 shadow-sm">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                            <div>
                                <h3 className="text-2xl font-display text-primary mb-1">Your Clinical Overview</h3>
                                <p className="text-sm text-primary/40 font-light italic">Welcome back, Dr. Julian Thorne</p>
                            </div>
                            <button className="bg-primary text-beige px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-soft-gold hover:text-primary transition-all flex items-center gap-3">
                                <Plus className="w-4 h-4" /> Create Prescription Cart
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {[
                                { label: 'Active Patients', value: '42' },
                                { label: 'Prescriptions Filled', value: '128' },
                                { label: 'Current Commission', value: '$1,420.50' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-stone-50 p-6 rounded-3xl border border-primary/5">
                                    <p className="text-[10px] text-primary/40 uppercase tracking-widest mb-2 font-medium">{stat.label}</p>
                                    <p className="text-3xl font-display text-primary">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-primary/5">
                                        <th className="pb-4 text-[10px] uppercase tracking-widest text-primary/40 font-bold">Patient</th>
                                        <th className="pb-4 text-[10px] uppercase tracking-widest text-primary/40 font-bold">Primary Pattern</th>
                                        <th className="pb-4 text-[10px] uppercase tracking-widest text-primary/40 font-bold">Last Activity</th>
                                        <th className="pb-4 text-[10px] uppercase tracking-widest text-primary/40 font-bold">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-primary/5">
                                    {patients.map((p, i) => (
                                        <tr key={i} className="group hover:bg-stone-50/50 transition-colors">
                                            <td className="py-6 font-medium text-primary">{p.name}</td>
                                            <td className="py-6">
                                                <span className="bg-primary/5 text-primary/80 px-3 py-1 rounded-full text-[10px] font-medium tracking-wide">
                                                    {p.condition}
                                                </span>
                                            </td>
                                            <td className="py-6 text-sm text-primary/40">{p.lastConsult}</td>
                                            <td className="py-6">
                                                <button className="text-primary hover:text-soft-gold transition-colors flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
                                                    Edit Cart <ExternalLink className="w-3 h-3" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
