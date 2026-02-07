"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, RotateCcw, TrendingUp } from "lucide-react";

// Mock Data for TÜFE (In a real app, this could be fetched from an API)
const tufeRates = {
    "2025-01": 64.77,
    "2024-12": 64.77,
    "2024-11": 62.02,
    "2024-10": 63.47,
    "2024-09": 64.91,
    "2024-08": 65.93,
    "2024-07": 65.07,
};

export function RentCalculator() {
    const [currentRent, setCurrentRent] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<string>("2025-01");
    const [rateType, setRateType] = useState<"tufe" | "konut-sinir" | "manual">("tufe");
    const [manualRate, setManualRate] = useState<string>("");
    const [result, setResult] = useState<{ newRent: number; increaseAmount: number; rate: number } | null>(null);

    const handleCalculate = () => {
        const rent = parseFloat(currentRent);
        if (isNaN(rent)) return;

        let rate = 0;

        if (rateType === "tufe") {
            rate = tufeRates[selectedDate as keyof typeof tufeRates] || 65.00;
        } else if (rateType === "konut-sinir") {
            rate = 25.00; // Old regulation, kept for reference or specific contracts
        } else {
            rate = parseFloat(manualRate);
        }

        if (isNaN(rate)) return;

        const increaseAmount = (rent * rate) / 100;
        const newRent = rent + increaseAmount;

        setResult({
            newRent: Math.round(newRent),
            increaseAmount: Math.round(increaseAmount),
            rate: rate
        });
    };

    const reset = () => {
        setResult(null);
        setCurrentRent("");
        setManualRate("");
    };

    return (
        <Card className="w-full max-w-lg mx-auto shadow-2xl border-primary/10">
            <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    <Calculator className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-primary">Kira Artış Hesaplama</CardTitle>
                <CardDescription>
                    2025 yılı güncel TÜFE oranlarına göre yasal kira artışını hesaplayın.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Mevcut Kira Bedeli (TL)</label>
                        <Input
                            type="number"
                            placeholder="Örn: 10000"
                            value={currentRent}
                            onChange={(e) => setCurrentRent(e.target.value)}
                            className="h-12 text-lg"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Hesaplama Yöntemi</label>
                        <Select value={rateType} onValueChange={(v: any) => setRateType(v)}>
                            <SelectTrigger className="h-12">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tufe">TÜFE (12 Aylık Ortalama)</SelectItem>
                                <SelectItem value="manual">Özel Oran Gir</SelectItem>
                                {/* <SelectItem value="konut-sinir">Konut Sınırı (%25 - Sona Erdi)</SelectItem> */}
                            </SelectContent>
                        </Select>
                    </div>

                    {rateType === "tufe" && (
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Sözleşme Yenileme Dönemi</label>
                            <Select value={selectedDate} onValueChange={setSelectedDate}>
                                <SelectTrigger className="h-12">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2025-01">Ocak 2025 (%64,77)</SelectItem>
                                    <SelectItem value="2024-12">Aralık 2024 (%64,77)</SelectItem>
                                    <SelectItem value="2024-11">Kasım 2024 (%62,02)</SelectItem>
                                    <SelectItem value="2024-10">Ekim 2024 (%63,47)</SelectItem>
                                    <SelectItem value="2024-09">Eylül 2024 (%64,91)</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-xs text-muted-foreground mt-1">
                                * Seçilen ayın açıklanan 12 aylık TÜFE ortalaması baz alınır.
                            </p>
                        </div>
                    )}

                    {rateType === "manual" && (
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Artış Oranı (%)</label>
                            <Input
                                type="number"
                                placeholder="Örn: 50"
                                value={manualRate}
                                onChange={(e) => setManualRate(e.target.value)}
                                className="h-12"
                            />
                        </div>
                    )}

                    <Button onClick={handleCalculate} size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                        HESAPLA
                    </Button>
                </div>

                {result && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Uygulanan Oran</span>
                            <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">%{result.rate.toFixed(2)}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-xs font-bold text-muted-foreground block mb-1">Artış Miktarı</span>
                                <span className="text-lg font-bold text-slate-700">+{result.increaseAmount.toLocaleString()} TL</span>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-muted-foreground block mb-1">Yeni Kira Bedeli</span>
                                <span className="text-2xl font-bold text-green-600">{result.newRent.toLocaleString()} TL</span>
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
