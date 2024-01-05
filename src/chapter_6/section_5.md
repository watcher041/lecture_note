
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
として求まるわけだが、ここで $N$ は定数としていた係数にも含まれているため、その部分に関しても細かく議論していく必要がある。

　
というようになる。ここで、エントロピーが示量量であることを踏まえるとこれだけでは不十分で、同じ状態を $N!$ だけあることを考慮して最終的には次の形になる。
$$
    \mathcal{W}=
    \frac{V^{N}}{N!h^{3N}}
    \frac{\pi^{3N/2}}{\Gamma(3N/2)}
    \left(2mU\right)^{3N/2-1}
$$
$$
    S=
    k_{\mathrm{B}}
    \left[
        N\ln
            \frac{V(2m\pi U)^{3/2}}
            {h^3}-\ln(2mU)
        -\ln N!-
        \ln
        \left(
            \frac{3N}{2}
        \right)!
    \right]
$$
スターリングの公式により
$$
    \ln N!\simeq
    N(\ln N-1)+
    \frac{1}{2}\ln(2\pi N)
$$
であることから、以下の形に近似できる。
$$
    S=
    k_{\mathrm{B}}N\ln
    \left[
        \frac{V}{N^{5/2}h^3}
        \left(
            \frac{4\pi m U}{3}
        \right)^{3/2}e^{5/2}
    \right]-
    k_{\mathrm{B}}\ln
    (2\sqrt{6}\pi mUN)
$$
そのため、化学ポテンシャルは以下のようになる。
$$
    \mu=
    -k_{\mathrm{B}}T\ln
    \left[
        \frac{Ve^{-\frac{1}{N}}}
        {N^{5/2}h^3}
        \left(
            2\pi m k_{\mathrm{B}}T
        \right)^{3/2}
    \right]
$$
大正準集団の場合にも、正準集団と同様な方法で取り扱うことができる。
$$
    S(U_t-U,N_t-N)=
    S(U_t,N_t)-
    \left(
        \frac{\partial S}{\partial U}
    \right)U-
    \left(
        \frac{\partial S}{\partial N}
    \right)N=
    S(U_t,S_t)-
    \left(
    \frac{U-\mu N}{T}
    \right)
$$
