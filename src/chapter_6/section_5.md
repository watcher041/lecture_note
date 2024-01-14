
## 化学ポテンシャル

　ここまで統計集団を考えることで、そのエネルギーや圧力などを期待値で求めることができていた。しかし、その中には化学的性質（気体などの構成物質）を考慮されていないため、熱力学第１法則に
$$
    \mathrm{d}U=
    \mathrm{d}'Q+\mathrm{d}'W+
    \mu\mathrm{d}N
$$
というように**化学ポテンシャル** $\mu$ を導入する（一つの物質のみ存在する場合）。このようにすると、粒子数の変化があった場合も取り扱うことが可能になる。各集団における化学ポテンシャルの形は
$$
    \begin{cases} 
        ・　小正準集団：
        \mu=-T\left(
            \frac{\partial S}
            {\partial N}
        \right)_{U,V}\\
        ・　　正準集団：
        \mu=-\frac{1}{\beta}\left(
            \frac{\partial}
            {\partial N}\ln Z
        \right)_{T,V}\\
        ・等圧定圧集団：
         \mu=-\frac{1}{\beta}\left(
            \frac{\partial}
            {\partial N}\ln Y
        \right)_{T,P}
    \end{cases}
$$
として求まるので、各集団でどのようになるかを見ていくことにしよう。

　小正準集団の場合は、状態数ならびにエントロピーが前項の $N!$ を考慮して
$$
    \mathcal{W}=
    \frac{V^{N}}{N!h^{3N}}
    \frac{2\pi^{3N/2}\delta p}
    {\Gamma(3N/2)}
    (2mU)^{3N/2-1}
$$
$$
    S=
    Nk_{\mathrm{B}}\ln
    \frac{V(2\pi mU)^{3/2}}{h^3}-
    k_{\mathrm{B}}
    \ln N!-
    k_{\mathrm{B}}
    \ln\Gamma(3N/2)+
    \ln\frac{2\delta p}{\sqrt{2mU}}
$$
であるが、Stringの公式を用いると
$$
    \ln N!\simeq N\ln N-N、
    \ln\Gamma(3N/2)=\ln (3N/2)!\simeq 
    3N/2\ln(3N/2)-3N/2
$$
と置けるため、以下の形になる。
$$
    S=
    Nk_{\mathrm{B}}\ln
    \left[
    \frac{8Ve^{5/2}}{h^3}
    \left(
        \frac{\pi mU}{3}
    \right)^{3/2}
    \right]-
    \frac{5}{2}
    Nk_{\mathrm{B}}
    \ln N+
    \ln\frac{2\delta p}{\sqrt{2mU}}
$$
これにより、化学ポテンシャルは以下の通りになる。
$$
    \mu=

$$