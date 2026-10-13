"use client";

import { useState, useEffect } from "react";
import { Play, RotateCcw, Terminal, CheckCircle2, Cpu, Code2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeSnippet {
  id: string;
  name: string;
  language: string;
  badge: string;
  code: string[];
  output: string[];
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: "qa-python",
    name: "qa_odoo_test.py",
    language: "Python • Playwright",
    badge: "QA Automation",
    code: [
      "import pytest",
      "from playwright.async_api import Page, expect",
      "",
      "@pytest.mark.asyncio",
      "async def test_odoo19_checkout(page: Page):",
      "    await page.goto('https://odoo19.local/pos')",
      "    await page.fill('#sku_input', 'PROD-8821')",
      "    await page.click('button.btn-validate')",
      "    await expect(page.locator('.toast-success')).to_be_visible()",
      "    print('✓ Transacción ERP completada')",
    ],
    output: [
      "[11:51:02] $ docker exec -it odoo19-qa pytest -v",
      "[11:51:02] Inicializando navegador Playwright Chromium...",
      "[11:51:03] PASS tests/test_odoo.py::test_odoo19_checkout (142ms)",
      "[11:51:03] Assertions: 12 verificadas | 0 fallos",
      "[11:51:03] Estado del contenedor Docker: HEALTHY (240h uptime)",
      "[11:51:03] >> RESULTADO: Suite de pruebas 100% EXITOSA",
    ],
  },
  {
    id: "csharp-backend",
    name: "RoleController.cs",
    language: "C# • ASP.NET Core",
    badge: "Backend API",
    code: [
      "[ApiController]",
      "[Route('api/v1/[controller]')]",
      "public class RoleController : ControllerBase {",
      "    [HttpPost('authorize')]",
      "    public async Task<IActionResult> Authorize([FromBody] AuthRequest req) {",
      "        var isPermitted = await _roleService.VerifyAsync(req.UserId);",
      "        if (!isPermitted) return Forbid();",
      "        await _emailNotifier.SendAuditAlertAsync(req);",
      "        return Ok(new { status = 'authorized', timestamp = DateTime.UtcNow });",
      "    }",
      "}",
    ],
    output: [
      "[11:51:02] $ dotnet run --launch-profile 'Development'",
      "[11:51:02] Compilando RoleController.cs con Roslyn...",
      "[11:51:03] Build Succeeded: 0 Advertencias, 0 Errores",
      "[11:51:03] POST /api/v1/role/authorize HTTP/1.1 -> 200 OK (18ms)",
      "[11:51:03] Notificación por email despachada en background",
      "[11:51:03] >> SERVICIO LISTO: Respuesta enviada con código 200",
    ],
  },
  {
    id: "sql-postgres",
    name: "query_analytics.sql",
    language: "PostgreSQL • Docker",
    badge: "Base de Datos",
    code: [
      "EXPLAIN ANALYZE",
      "SELECT u.id, u.full_name, COUNT(o.id) as total_orders",
      "FROM users u",
      "INNER JOIN orders o ON o.user_id = u.id",
      "WHERE o.status = 'COMPLETED'",
      "GROUP BY u.id, u.full_name",
      "HAVING COUNT(o.id) > 10",
      "ORDER BY total_orders DESC LIMIT 5;",
    ],
    output: [
      "[11:51:02] $ psql -U postgres -d enterprise_db",
      "[11:51:02] Ejecutando planificador de consultas PostgreSQL 16...",
      "[11:51:03] HashAggregate (cost=14.20..18.50 rows=100 width=40)",
      "[11:51:03] Index Scan usando idx_orders_status (actual time=0.042ms)",
      "[11:51:03] Execution Time: 0.184 ms (Índices óptimos)",
      "[11:51:03] >> CONSULTA EXITOSA: 5 registros extraídos en 0.18ms",
    ],
  },
];

export const LiveCodeSandbox = () => {
  const [selectedSnippet, setSelectedSnippet] = useState<CodeSnippet>(SNIPPETS[0]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executionLine, setExecutionLine] = useState<number>(-1);
  const [outputLogs, setOutputLogs] = useState<string[]>(SNIPPETS[0].output);
  const [activeTab, setActiveTab] = useState<"code" | "terminal">("code");
  const [latency, setLatency] = useState<number>(14);

  // Ejecución en tiempo real con simulación de compilador y runner
  const handleRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setExecutionLine(0);
    setOutputLogs([`[INFO] Iniciando ejecución en tiempo real de ${selectedSnippet.name}...`]);

    const totalLines = selectedSnippet.code.length;
    let currentLine = 0;

    const interval = setInterval(() => {
      currentLine++;
      setExecutionLine(currentLine);
      setLatency(Math.floor(10 + Math.random() * 15));

      if (currentLine >= totalLines) {
        clearInterval(interval);
        setTimeout(() => {
          setIsRunning(false);
          setExecutionLine(-1);
          setOutputLogs(selectedSnippet.output);
        }, 300);
      }
    }, 120);
  };

  // Actualiza los logs al cambiar de snippet
  useEffect(() => {
    setOutputLogs(selectedSnippet.output);
    setExecutionLine(-1);
    setIsRunning(false);
  }, [selectedSnippet]);

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-[#050914]/90 backdrop-blur-3xl border border-white/10 shadow-[0_16px_40px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all">
      {/* Barra Superior estilo macOS / Apple Developer Window */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-white/[0.04] border-b border-white/10 flex-wrap gap-2">
        {/* Controles de Ventana de Apple */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
          <span className="text-[11px] font-mono text-slate-400 font-semibold pl-2 hidden sm:inline">
            {selectedSnippet.name}
          </span>
        </div>

        {/* Monitor en Tiempo Real de Ejecución */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>RUNNER EN VIVO</span>
          </div>
          <span className="text-[10px] font-mono text-sky-400 hidden sm:inline">
            {latency}ms
          </span>
        </div>
      </div>

      {/* Selector de Lenguajes / Casos de Uso del CV */}
      <div className="flex items-center gap-1 p-1.5 bg-white/[0.02] border-b border-white/5 overflow-x-auto scrollbar-none">
        {SNIPPETS.map((snippet) => {
          const isSelected = selectedSnippet.id === snippet.id;
          return (
            <button
              key={snippet.id}
              onClick={() => setSelectedSnippet(snippet)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex-shrink-0 ${
                isSelected
                  ? "bg-white/[0.1] text-sky-300 border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
              }`}
            >
              <Code2 className="w-3 h-3 text-sky-400" />
              <span>{snippet.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Tabs entre Código y Consola Terminal */}
      <div className="flex items-center justify-between px-3 pt-2">
        <div className="flex items-center gap-1 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab("code")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === "code"
                ? "bg-white/[0.08] text-white font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Editor de Código
          </button>
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
              activeTab === "terminal"
                ? "bg-white/[0.08] text-white font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Terminal className="w-3 h-3 text-sky-400" /> Terminal
          </button>
        </div>

        {/* Botón de Ejecutar en Tiempo Real */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRun}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-sky-400 to-indigo-500 hover:brightness-110 text-[#030712] font-bold text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(56,189,248,0.35)] transition-all disabled:opacity-50"
        >
          {isRunning ? (
            <>
              <RotateCcw className="w-3 h-3 animate-spin" />
              <span>Ejecutando...</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 fill-current" />
              <span>Ejecutar</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Contenido: Código o Terminal con Renderizado en Vivo */}
      <div className="p-3">
        <AnimatePresence mode="wait">
          {activeTab === "code" ? (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-[11px] leading-relaxed overflow-x-auto bg-[#030712]/60 p-3 rounded-xl border border-white/5 max-h-[175px] scrollbar-thin"
            >
              {selectedSnippet.code.map((line, index) => {
                const isCurrent = executionLine === index;
                return (
                  <div
                    key={index}
                    className={`flex items-center transition-colors px-1.5 py-0.5 rounded ${
                      isCurrent
                        ? "bg-sky-500/20 text-sky-200 border-l-2 border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                        : "text-slate-300"
                    }`}
                  >
                    <span className="w-6 select-none text-slate-600 text-right pr-2.5">
                      {index + 1}
                    </span>
                    <span className="whitespace-pre">
                      {line || " "}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-[11px] leading-relaxed bg-[#02050e] p-3 rounded-xl border border-white/5 max-h-[175px] overflow-y-auto text-slate-300 space-y-1.5"
            >
              {outputLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-1.5 ${
                    log.includes("EXITOSA") || log.includes("PASS") || log.includes("HEALTHY")
                      ? "text-emerald-400 font-semibold"
                      : log.includes("Compilando") || log.includes("Inicializando")
                      ? "text-sky-300"
                      : "text-slate-300"
                  }`}
                >
                  <span className="text-slate-600 select-none">&gt;</span>
                  <span className="break-all">{log}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pie de la Consola con Estadísticas del Sistema */}
      <div className="flex items-center justify-between px-3 py-2 bg-white/[0.02] border-t border-white/5 text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-slate-300">
          <CheckCircle2 className="w-3 h-3 text-sky-400" />
          <span>{selectedSnippet.language}</span>
        </span>
        <span className="text-slate-400">
          Docker Engine: Activo
        </span>
      </div>
    </div>
  );
};
