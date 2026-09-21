import React, { useState } from 'react';
import { X, Copy, Check, Github, Globe } from 'lucide-react';

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCode = `git init
git add .
git commit -m "feat: Dave Maxuell portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main`;

  const vercelCode = `# Option A: Connect your GitHub repository directly on https://vercel.com
# Option B: Run via Vercel CLI:
npm i -g vercel
vercel`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 border border-neutral-200 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-neutral-200 hover:bg-neutral-100 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-neutral-900">GitHub & Vercel Guide</h3>
            <p className="text-xs text-neutral-500">배포 및 저장 가이드</p>
          </div>
        </div>

        <div className="space-y-4 text-xs">
          {/* Step 1: GitHub */}
          <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-neutral-800 flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" /> 1. GitHub 저장
              </span>
              <button
                type="button"
                onClick={() => copyCode(gitCode, 1)}
                className="text-[11px] font-semibold text-neutral-600 hover:text-neutral-950 flex items-center gap-1 cursor-pointer"
              >
                {copiedIndex === 1 ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                {copiedIndex === 1 ? '복사됨!' : '명령어 복사'}
              </button>
            </div>
            <pre className="bg-neutral-900 text-neutral-100 p-2.5 rounded-xl font-mono text-[11px] overflow-x-auto">
              {gitCode}
            </pre>
          </div>

          {/* Step 2: Vercel */}
          <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-neutral-800 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" /> 2. Vercel 배포
              </span>
              <button
                type="button"
                onClick={() => copyCode(vercelCode, 2)}
                className="text-[11px] font-semibold text-neutral-600 hover:text-neutral-950 flex items-center gap-1 cursor-pointer"
              >
                {copiedIndex === 2 ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                {copiedIndex === 2 ? '복사됨!' : '명령어 복사'}
              </button>
            </div>
            <p className="text-neutral-600 mb-2 leading-relaxed">
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-900 font-semibold underline"
              >
                vercel.com
              </a>에 로그인 후 <strong>&ldquo;Add New Project&rdquo;</strong>에서 GitHub 저장소를 선택하면 자동으로 Vite 프리셋으로 배포됩니다.
            </p>
            <pre className="bg-neutral-900 text-neutral-100 p-2.5 rounded-xl font-mono text-[11px] overflow-x-auto">
              {vercelCode}
            </pre>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-neutral-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 cursor-pointer"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
