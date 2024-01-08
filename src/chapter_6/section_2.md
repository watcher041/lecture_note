
## 統計集団（小正準集団）

　気体の性質を調べる際には、よくピストンなどの容器に気体を閉じ込めておくことが多いが、このときに閉じ込められた気体（分子の集まり）は一種の集団を形成している。この集団を**統計集団**と呼ぶ。例えば、この気体が外部との熱のやり取り、漏れ出しなどもなく完全に孤立している集団（**小正準集団**）だとすると、熱力学第1法則
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
と体積が変化しない関係で一定になる。体積については気体の性質とは直接関係がない（人的に変更されるもの）が、エントロピーについてはBoltzmannによると気体のとりうる状態数 $\mathcal{W}$ により
$$
    S=k_{\mathrm{B}}\ln\mathcal{W}
$$
というような関係があるとされている（ボルツマンの原理）。この状態数というのは全体の状態がエネルギーを用いて書けることから計算することができる。具体的には、解析力学においてエネルギー $U$ はハミルトニアン $\mathcal{H}$ で記述される。例として、 $N$ 個の粒子がある場合は $i$ 番目の粒子の一成分の位置と運動量を $q_i,p_i\ (i=1,\cdots,3N)$ とすると
$$
    U=\mathcal{H}
    (q_1,\cdots,q_{3N},p_1,
    \cdots,p_{3N})
$$
というように $6N$ の変数を持つ関数になる。これら $q.p$ の組（共役変数）が存在する空間のことを**位相空間**と呼ぶ。例えば、自由粒子の場合だとハミルトニアンが
$$
    \mathcal{H}=
    \sum_{i=1}^{3N}
    \frac{p_i^2}{2m}
$$
の場合は、$p_1,\cdots,p_{3N}$ のみ依存している。今回はエネルギーが一定値 $U$ ということなので、この式を変形すると
$$
    \sum_{i=1}^{3N}p_i^2=2mU
$$
であることから、$3N$ 次元の球の方程式になっていることが分かる。簡単のため、粒子が一つで1次元の場合の状態数を考えると $q_1,p_1$ しかないため
$$
    p_1^2=2m U
$$
として、これを満たす $q_1,p_1$ の状態数（組み合わせの数）を数えていく。今の場合、一辺 $L$ の箱の中に粒子があることを考えると、任意の間隔 $\delta q、\delta p$ ごとに一つの状態があるものとして
$$
    \mathcal{W}_1=
    \frac{L}{\delta q}\times
    \frac{P}{\delta p}=
    \frac{LP}{\delta q\delta p}
$$
となる。同様に2次元になった場合でも
$$
    \mathcal{W}_2=
    \frac{L^2}{\delta q^2}\times
    \frac{P^2}{\delta p^2}=
    \frac{L^2P^2}{(\delta q\delta p)^2}
$$
となることから、$3N$ 次元になった場合は以下の形になる。
$$
    \mathcal{W}_{3N}=
    \frac{V^{N}P^{3N}}{h^{3N}}、
    V=L^3、
    h=\delta q\delta p
$$
しかし、いまの場合は運動量の方が円周上に制限されていることから、以下の通りになる。
$$
    \mathcal{W}_1=
    \frac{L}{\delta q}\times 2、
    \mathcal{W}_2=
    \frac{L^2}{\delta q^2}\times
    \frac{\pi\sqrt{2mU}}{\delta p}
$$

$3N$ 次元になった場合は半径 $r$ の $f$ 次元の球の表面積が
$$
    S_{f}(r)=
    \frac{f\pi^{f/2}}{\Gamma(f/2+1)}
    r^{f-1}
$$
であることから、状態数は以下の通りとなる。
$$
    \mathcal{W}=
    \frac{L^{3N}}{\delta q^{3N}}
    \frac{S_{3N}(\sqrt{2m U})}
    {\delta p^{3N-1}}=
    \frac{V^{N}}{h^{3N}}
    \frac{2\pi^{3N/2}}{\Gamma(3N/2)}
    (2mU)^{(3N-1)/2}\delta p
$$

　一方で、熱力学第1法則をエントロピーとエネルギーを含む式に展開すると
$$
    \mathrm{d}S=
    \frac{1}{T}\mathrm{d}U+
    \frac{P}{T}\mathrm{d}V
$$
であるため、以下の関係式が成り立つことが分かる。
$$
    \left(
        \frac{\partial S}{\partial U}
    \right)_{V}=
    \frac{1}{T}、
    \left(
        \frac{\partial S}{\partial V}
    \right)_{U}=
    \frac{P}{T}
$$
そのため、まずエントロピーを求めてみると
$$
    S=
    k_{\mathrm{B}}
    \ln\frac{V^{N}2\pi^{3N/2}}
    {h^{3N}\Gamma(3N/2)}+
    \frac{1}{2}(3N-1)k_{\mathrm{B}}
    \ln(2mU)+
    k_{\mathrm{B}}
    \ln\delta p
$$
であることから、それぞれの式に代入すると
$$
    \left(
        \frac{\partial S}{\partial U}
    \right)_{V}=
    \frac{1}{T}
    \rightarrow
    U=
    \frac{1}{2}(3N-1)k_{\mathrm{B}}T
    \simeq
    \frac{3}{2}Nk_{\mathrm{B}}T
$$
$$
    \left(
        \frac{\partial S}{\partial V}
    \right)_{U}=
    \frac{P}{T}
    \rightarrow
    PV=Nk_{\mathrm{B}}T
$$
という二式が求められる。このうち、エネルギーをハミルトニアンと見比べると
$$
    \sum_{i=1}^{3N}
    \frac{p_i^2}{2m}=
    \sum_{i=1}^{3N}
    \frac{1}{2}mv_{i}^2=
    \frac{3}{2}Nk_{\mathrm{B}}T
    \rightarrow
    \frac{1}{3N}
    \left(
    \sum_{i=1}^{3N}\frac{1}{2}mv_{i}^2
    \right)=
    \frac{1}{2}k_{\mathrm{B}}T
$$
というように、一成分当たりの平均エネルギーが $1/2k_{\mathrm{B}}T$ になっていることが分かる（**エネルギー等分配則**）。そこで、これを期待値として
$$
    \braket{v^2}=
    \frac{1}{3N}
    \sum_{i=1}^{3N}v_{i}^2=
    \frac{k_{\mathrm{B}}T}{m}
$$
というようにすると、圧力に関する式を得ることができる。
$$
    PV=M\braket{v_{\perp}^2}
    \rightarrow
    PV=Nk_\mathrm{B}T
$$
さらに、$n$ モルでの理想気体の状態方程式は
$$
    PV=nRT
$$
であることを踏まえると、次のような関係があることが導ける。
$$
    R=N_{\mathrm{A}}k_{\mathrm{B}}、
    N_{\mathrm{A}}=\frac{N}{n}
$$
ここでの $N_{\mathrm{A}}$ は1molでの分子数を表しており**アボガドロ数**と呼ばれている。そして、この関係式から定積モル比熱（1molあたりの比熱）を求めてみると次のようになる。
$$
    C_V=
    \left(
    \frac{\partial U}{\partial T}
    \right)_{V}=\frac{3}{2}R
$$

この値と実験値を比較してみると以下の表の通りになる。

|分子名|$C_V$（実験値）|$3/2R$|
|-|-|-|
|He（気体）|$12.60\ \mathrm{J/K\cdot mol}\ (291℃)\\ 12.33\ \mathrm{J/K\cdot mol}\ (93℃)$|$12.47\ \mathrm{J/K\cdot mol}$|
|A（気体）|$12.86\ \mathrm{J/K\cdot mol}\ (288℃)\\ 12.00\ \mathrm{J/K\cdot mol}\ (93℃)$|$12.47\ \mathrm{J/K\cdot mol}$|

単原子分子の場合だと近い値をとっていることが見て取れるが、二原子分子などになると当てはまらなくなる。これは、単原子分子のときと**自由度**が異なるためで、例えば二原子分子の場合だと $5N$ だけある（チアバトンのように棒の両端に原子があるイメージ）。 


|分子名|$C_V$（実験値）|$5/2R$|
|-|-|-|
|N$_2$（気体）|$20.83\ \mathrm{J/K\cdot mol}\ (293℃)\\ 19.78\ \mathrm{J/K\cdot mol}\ (92℃)$|$20.78\ \mathrm{J/K\cdot mol}$|$12.47\ \mathrm{J/K\cdot mol}$|
|O$_2$（気体）|$20.84\ \mathrm{J/K\cdot mol}\ (293℃)\\ 18.43\ \mathrm{J/K\cdot mol}\ (92℃)$|$20.78\ \mathrm{J/K\cdot mol}$|$12.47\ \mathrm{J/K\cdot mol}$|

同様に、固体についても調和振動子と考えると自由度が $6N$ だけあり、なおかつDulong-Putiの法則においても $3R$ になることは確かめられている。

|分子名|$C_V$（実験値）|$3R$|
|-|-|-|
|Al（固体）|$24.37\ \mathrm{J/K\cdot mol}\ (15～100℃間の平均)$|$24.94\ \mathrm{J/K\cdot mol}$|
|Pb（固体）|$22.70\ \mathrm{J/K\cdot mol}\ (15～100℃間の平均)$|$24.94\ \mathrm{J/K\cdot mol}$|



