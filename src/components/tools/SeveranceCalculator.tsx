"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, RotateCcw, AlertTriangle } from "lucide-react";

const KIDEM_TAVANI_2026 = 64948.77;
const DAMGA_VERGISI_ORANI = 0.00759;

interface SeveranceResult {
    gpiGross: number;
    ceilingApplied: boolean;
    perYearAmount: number;
    totalYears: number;
    grossSeverance: number;
    stampTax: number;
    netSeverance: number;
}

export function SeveranceCalculator() {
    const [years, setYears] = useState<string>("");
    const [months, setMonths] = useState<string>("");
    const [days, setDays] = useState<string>("");
    const [grossSalary, setGrossSalary] = useState<string>("");
    const [mealAllowance, setMealAllowance] = useState<string>("");
    const [transportAllowance, setTransportAllowance] = useState<string>("");
    const [annualBonus, setAnnualBonus] = useState<string>("");
    const [annualPremium, setAnnualPremium] = useState<string>("");
    const [result, setResult] = useState<SeveranceResult | null>(null);

    const handleCalculate = () => {
        const y = parseFloat(years) || 0;
        const m = parseFloat(months) || 0;
        const d = parseFloat(days) || 0;
        const salary = parseFloat(grossSalary) || 0;

        if (salary === 0 || (y === 0 && m === 0 && d === 0)) return;

        const meal = parseFloat(mealAllowance) || 0;
        const transport = parseFloat(transportAllowance) || 0;
        const bonus = parseFloat(annualBonus) || 0;
        const premium = parseFloat(annualPremium) || 0;

        const gpiGross = salary + meal + transport + (bonus / 12) + (premium / 12);
        const totalYears = y + (m / 12) + (d / 365);
        const ceilingApplied = gpiGross > KIDEM_TAVANI_2026;
        const perYearAmount = Math.min(gpiGross, KIDEM_TAVANI_2026);
        const grossSeverance = totalYears * perYearAmount;
        const stampTax = grossSeverance * DAMGA_VERGISI_ORANI;
        const netSeverance = grossSeverance - stampTax;

        setResult({
            gpiGross: Math.round(gpiGross * 100) / 100,
            ceilingApplied,
            perYearAmount: Math.round(perYearAmount * 100) / 100,
            totalYears: Math.round(totalYears * 1000) / 1000,
            grossSeverance: Math.round(grossSeverance * 100) / 100,
            stampTax: Math.round(stampTax * 100) / 100,
            netSeverance: Math.round(netSeverance * 100) / 100,
        });
    };

    const reset = () => {
        setResult(null);
        setYears("");
        setMonths("");
        setDays("");
        setGrossSalary("");
        setMealAllowance("");
        setTransportAllowance("");
        setAnnualBonus("");
        setAnnualPremium("");
    };

    const formatCurrency = (value: number) =>
        value.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <Card className="w-full max-w-lg mx-auto shadow-2xl border-primary/10">
            <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    <Calculator className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-primary">Kıdem Tazminatı Hesaplama</CardTitle>
                <CardDescription>
                    Giydirilmiş brüt ücretiniz ve çalışma sürenize göre 2026 güncel tavan dahilinde net kıdem tazminatınızı hesaplayın.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                    {/* Çalışma Süresi */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Çalışma Süresi</label>
                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <Input type="number" placeholder="Yıl" value={years} onChange={(e) => setYears(e.target.value)} className="h-12 text-lg" min="0" />
                                <span className="text-xs text-muted-foreground">Yıl</span>
                            </div>
                            <div>
                                <Input type="number" placeholder="Ay" value={months} onChange={(e) => setMonths(e.target.value)} className="h-12 text-lg" min="0" max="11" />
                                <span className="text-xs text-muted-foreground">Ay</span>
                            </div>
                            <div>
                                <Input type="number" placeholder="Gün" value={days} onChange={(e) => setDays(e.target.value)} className="h-12 text-lg" min="0" max="30" />
                                <span className="text-xs text-muted-foreground">Gün</span>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">* En az 1 yıl çalışma şartı aranır.</p>
                    </div>

                    {/* Brüt Maaş */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Aylık Brüt Maaş (TL)</label>
                        <Input type="number" placeholder="Örn: 40000" value={grossSalary} onChange={(e) => setGrossSalary(e.target.value)} className="h-12 text-lg" />
                    </div>

                    {/* Yan Haklar */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Yan Haklar (Opsiyonel)</label>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Input type="number" placeholder="Yemek (TL/ay)" value={mealAllowance} onChange={(e) => setMealAllowance(e.target.value)} className="h-10" />
                                <span className="text-xs text-muted-foreground">Yemek yardımı</span>
                            </div>
                            <div>
                                <Input type="number" placeholder="Yol (TL/ay)" value={transportAllowance} onChange={(e) => setTransportAllowance(e.target.value)} className="h-10" />
                                <span className="text-xs text-muted-foreground">Yol yardımı</span>
                            </div>
                            <div>
                                <Input type="number" placeholder="İkramiye (TL/yıl)" value={annualBonus} onChange={(e) => setAnnualBonus(e.target.value)} className="h-10" />
                                <span className="text-xs text-muted-foreground">Yıllık ikramiye toplamı</span>
                            </div>
                            <div>
                                <Input type="number" placeholder="Prim (TL/yıl)" value={annualPremium} onChange={(e) => setAnnualPremium(e.target.value)} className="h-10" />
                                <span className="text-xs text-muted-foreground">Yıllık prim toplamı</span>
                            </div>
                        </div>
                    </div>

                    <Button onClick={handleCalculate} size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                        HESAPLA
                    </Button>
                </div>

                {result && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                        {result.ceilingApplied && (
                            <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                                <p className="text-sm text-amber-800">
                                    Giydirilmiş brüt ücretiniz ({formatCurrency(result.gpiGross)} TL) tavan tutarını aştığı için hesaplama <strong>{formatCurrency(KIDEM_TAVANI_2026)} TL</strong> tavan üzerinden yapılmıştır.
                                </p>
                            </div>
                        )}

                        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Giydirilmiş Brüt Ücret</span>
                            <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{formatCurrency(result.gpiGross)} TL</span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Kıdem süresi</span>
                                <span className="font-semibold text-slate-700">{result.totalYears} yıl</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Her yıl için tazminat</span>
                                <span className="font-semibold text-slate-700">{formatCurrency(result.perYearAmount)} TL</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Brüt kıdem tazminatı</span>
                                <span className="font-semibold text-slate-700">{formatCurrency(result.grossSeverance)} TL</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Damga vergisi (‰7,59)</span>
                                <span className="font-semibold text-red-600">-{formatCurrency(result.stampTax)} TL</span>
                            </div>
                        </div>

                        <div className="pt-3 border-t border-slate-200">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Net Kıdem Tazminatı</span>
                                <span className="text-2xl font-bold text-green-600">{formatCurrency(result.netSeverance)} TL</span>
                            </div>
                        </div>

                        <Button variant="ghost" size="sm" onClick={reset} className="w-full text-muted-foreground hover:text-primary">
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Yeni Hesaplama
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
