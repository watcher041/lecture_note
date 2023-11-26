
## 統計集団

　気体の性質を調べる際には、箱の中に気体を閉じ込めておく必要があるが、このときに閉じ込められた気体（分子の集まり）は一種の集団を形成している。この集団を**統計集団**と呼ぶ。例えば、この気体が外部との熱のやり取り、漏れ出しなどもなく完全に孤立している状態だとすると、熱力学第1法則
$$
    \mathrm{d}U=
    \mathrm{d}'Q+\mathrm{d}W
$$
は右辺が0となるため、内部エネルギーが保存されることが分かる。さらに内部で熱平衡になっている場合にはエントロピーの増大もしなくなるため
$$
    \mathrm{d}'Q=T\mathrm{d}S=0
$$
であり、なおかつ容器に閉じ込められている関係で仕事も
$$
    \mathrm{d}'W=-P\mathrm{d}V=0
$$
と体積が変化しない関係で一定になる。体積については気体の性質とは直接関係がない（人的に変更されるもの）が、エントロピーについてはBoltzmannによると気体のとりうる状態の数 $\mathcal{W}$ により
$$
    S=k_{\mathrm{B}}\ln\mathcal{W}
$$
と書ける（ボルツマンの原理）。この状態の数というのは全体の状態がエネルギーを用いて書けることから計算することができる。具体的には、エネルギーが
$$
    U=\sum_{i=1}^{N}
    \frac{1}{2}m\bm{v}_{i}^2、
    （U：一定）
$$
であることから以下のように整理すると球の方程式のようになっていることが分かる。
$$
    v_1^2+\cdots+v_{3N}^2=
    \frac{2U}{m}
$$
この体積というのは公式で存在しており、$f$ 次元の球の場合は
$$
    V_f=
    \frac{\pi^{f/2}}{\Gamma(f/2+1)}r^f
$$
であるから、以下のようになる。
$$
    V(U)=\frac{1}{\Gamma(3N/2+1)}
    \left(
        \frac{2\pi U}{m}
    \right)^{3N/2}
$$
エネルギーが一定の際に取りうる速度のパターン数はこの表面積になるため
$$
    S(U)=
    \left(
    \frac{\mathrm{d}V}{\mathrm{d}U}
    \right)=
    \frac{1}{\Gamma(3N/2+1)}
    \left(
        \frac{2\pi}{m}
    \right)^{3N/2}
    \frac{3N}{2}
    U^{3N/2-1}
$$
と微分することで求められる。しかし、このままだと次元が無次元とならないため、次元調整用に$A$ をかけたものが状態数となる。

$$
    \mathcal{W}=
    \frac{A}{\Gamma(3N/2+1)}
    \left(
        \frac{2\pi}{m}
    \right)^{3N/2}
    \frac{3N}{2}
    U^{3N/2-1}
$$
一方で、熱力学第1法則から得られるエネルギーとエントロピーの関係式を用いると
$$
    \frac{\partial S}{\partial E}=
    \frac{1}{T}
    \rightarrow
    E\simeq
    \frac{3}{2}Nk_{\mathrm{B}}T
$$
というようにエネルギーが求められる。これは元のエネルギーの式と比べると
$$
    \sum_{i=1}^{3N}\frac{1}{2}mv_{i}^2=
    \frac{3}{2}Nk_{\mathrm{B}}T
    \rightarrow
    \frac{1}{3N}
    \left(
    \sum_{i=1}^{3N}\frac{1}{2}mv_{i}^2
    \right)=
    \frac{1}{2}k_{\mathrm{B}}T
$$
というように、一体当たりの平均エネルギーになっていることが分かる。これは見方を変えると
$$
    \frac{m}{2}
    \left(
    \frac{1}{3N}
    \sum_{i=1}^{3N}v_{i}^2
    \right)=
    \frac{1}{2}k_{\mathrm{B}}T
    \rightarrow
    \braket{v^2}=
    \frac{k_\mathrm{B}T}{m}
$$
と一つの成分の速度の二乗平均が求められる。すなわち、以下の通りの関係式が得られる。
$$
    PV=M\braket{v_{\perp}^2}
    \rightarrow
    PV=Nk_\mathrm{B}T
$$
1molの気体である場合は理想気体の状態方程式から気体定数 $R$ により次の関係が導かれる。
$$
    R=Nk_{\mathrm{B}T}
$$

Dulong-Putiの法則

正準集団

$$
    Z=
    \int\cdots\int
    e^{-\frac{\beta m}{2}
    (v_1^2+\cdots+v_{3N}^2) }
    \mathrm{d}v_1\cdots\mathrm{d}v_{3N}
$$

$$
    \braket{v^2}=
    \frac{1}{Z}
    \int\cdots\int
    v^2
    e^{-\frac{\beta m}{2}
    (v_1^2+\cdots+v_{3N}^2) }
    \mathrm{d}v_1\cdots\mathrm{d}v_{3N}=
    \frac{f(\beta)}{g(\beta)}=
    \frac{1}{\beta m}、
$$
$$
    \left(
        f(\beta)=
        \int v^2 e^{-\frac{\beta m}{2}v^2 }\mathrm{d}v=
        \frac{1}{2}\sqrt{\frac{2^3\pi}{\beta^3 m^3}}、
        g(\beta)=
        \int e^{-\frac{\beta m}{2}v^2 }\mathrm{d}v=
        \sqrt{\frac{2\pi}{\beta m}}
    \right)
$$
$$
    PV=Nk_{\mathrm{B}}T
$$

ボルツマン定数の値