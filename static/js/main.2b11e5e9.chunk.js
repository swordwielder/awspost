(this["webpackJsonpchenpost-app"] = this["webpackJsonpchenpost-app"] || []).push([
    [0], {
        107: function (e, a, t) {
            "use strict";
            t.r(a);
            var n = t(0),
                l = t.n(n),
                r = t(16),
                i = t.n(r),
                c = (t(50), t(51), t(52), t(53), t(10)),
                o = t(11),
                m = (t(54), t(2)),
                s = t(3),
                u = t.n(s),
                d = t(41),
                p = t.n(d),
                E = t(5),
                f = t.n(E);
            var b = function (e) {
                var a = Object(n.useState)({}),
                    t = Object(m.a)(a, 2),
                    r = t[0],
                    i = t[1];
                return Object(n.useEffect)((function () {
                    u.a.get("/api/information").then((function (e) {
                        i(e.data.socialLinks)
                    }))
                }), []), l.a.createElement("ul", {
                    className: e.bordered ? "mi-socialicons mi-socialicons-bordered" : "mi-socialicons"
                }, r.facebook ? l.a.createElement("li", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: r.facebook
                }, l.a.createElement(f.a, {
                    name: "facebook"
                }))) : null, r.twitter ? l.a.createElement("li", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: r.twitter
                }, l.a.createElement(f.a, {
                    name: "twitter"
                }))) : null, r.pinterest ? l.a.createElement("li", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: r.pinterest
                }, l.a.createElement(f.a, {
                    name: "pinterest"
                }))) : null, r.behance ? l.a.createElement("li", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: r.behance
                }, l.a.createElement(f.a, {
                    name: "behance"
                }))) : null, r.linkedin ? l.a.createElement("li", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: r.linkedin
                }, l.a.createElement(f.a, {
                    name: "linkedin"
                }))) : null, r.dribbble ? l.a.createElement("li", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: r.dribbble
                }, l.a.createElement(f.a, {
                    name: "dribbble"
                }))) : null, r.github ? l.a.createElement("li", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: r.github
                }, l.a.createElement(f.a, {
                    name: "github"
                }))) : null)
            };
            var g = function () {
                var e = Object(n.useState)(""),
                    a = Object(m.a)(e, 2),
                    t = a[0],
                    r = a[1],
                    i = Object(n.useState)(!1),
                    o = Object(m.a)(i, 2),
                    s = o[0],
                    d = o[1];
                return Object(n.useEffect)((function () {
                    u.a.get("/api/information").then((function (e) {
                        r(e.data)
                    }))
                }), []), l.a.createElement("nav", {
                    className: s ? "mi-header is-visible" : "mi-header"
                }, l.a.createElement("button", {
                    onClick: function () {
                        d(!s)
                    },
                    className: "mi-header-toggler"
                }, s ? l.a.createElement(f.a, {
                    name: "close"
                }) : l.a.createElement(f.a, {
                    name: "menu"
                })), l.a.createElement("div", {
                    className: "mi-header-inner"
                }, l.a.createElement("div", {
                    className: "mi-header-image"
                }, l.a.createElement(c.b, {
                    to: "/"
                }, l.a.createElement("img", {
                    src: t.brandImage,
                    alt: "brandimage"
                }))), l.a.createElement("ul", {
                    className: "mi-header-menu"
                }, l.a.createElement("li", null, l.a.createElement(c.c, {
                    exact: !0,
                    to: "/"
                }, l.a.createElement("span", null, "Home"))), l.a.createElement("li", null, l.a.createElement(c.c, {
                    to: "/about"
                }, l.a.createElement("span", null, "About"))), l.a.createElement("li", null, l.a.createElement(c.c, {
                    to: "/resume"
                }, l.a.createElement("span", null, "Resume"))), l.a.createElement("li", null, l.a.createElement(c.c, {
                    to: "/portfolios"
                }, l.a.createElement("span", null, "Portfolios"))), l.a.createElement("li", null, l.a.createElement(c.c, {
                    to: "/contact"
                }, l.a.createElement("span", null, "Contact")))), l.a.createElement("p", {
                    className: "mi-header-copyright"
                }, "\xa9 ", (new Date).getFullYear(), " ", l.a.createElement("b", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: "https://www.linkedin.com/in/qifchen"
                }, "Qi Chen")))))
            };
            var h = function (e) {
                return l.a.createElement("div", {
                    className: "mi-bglines"
                }, l.a.createElement("span", null), l.a.createElement("span", null), l.a.createElement("span", null), l.a.createElement("span", null), l.a.createElement("span", null))
            };
            var v = function (e) {
                return l.a.createElement("div", {
                    className: "mi-wrapper"
                }, l.a.createElement(h, null), l.a.createElement(g, null), e.children)
            };
            var N = function () {
                    var e = Object(n.useState)(""),
                        a = Object(m.a)(e, 2),
                        t = a[0],
                        r = a[1];
                    return Object(n.useEffect)((function () {
                        u.a.get("/api/information").then((function (e) {
                            r(e.data)
                        }))
                    }), []), l.a.createElement(v, null, l.a.createElement("div", {
                        className: "mi-home-area mi-padding-section"
                    }, l.a.createElement(p.a, {
                        className: "mi-home-particle",
                        params: {
                            particles: {
                                number: {
                                    value: 160,
                                    density: {
                                        enable: !1
                                    }
                                },
                                color: {
                                    value: "#ffffff"
                                },
                                opacity: {
                                    value: .1
                                },
                                size: {
                                    value: 5,
                                    random: !0,
                                    anim: {
                                        speed: 4,
                                        size_min: .3
                                    }
                                },
                                line_linked: {
                                    enable: !1
                                },
                                move: {
                                    random: !0,
                                    speed: 1,
                                    direction: "top",
                                    out_mode: "out"
                                }
                            }
                        }
                    }), l.a.createElement("div", {
                        className: "container"
                    }, l.a.createElement("div", {
                        className: "row justify-content-center"
                    }, l.a.createElement("div", {
                        className: "col-lg-10 col-12"
                    }, l.a.createElement("div", {
                        className: "mi-home-content"
                    }, l.a.createElement("h1", null, "Hi, I am ", l.a.createElement("span", {
                        className: "color-theme"
                    }, t.name)), l.a.createElement("p", null, t.aboutContent), l.a.createElement(b, {
                        bordered: !0
                    })))))))
                },
                y = t(44),
                w = t.n(y),
                k = t(17),
                j = t.n(k),
                S = t(108);
            var O = function (e) {
                return l.a.createElement("div", {
                    className: "mi-sectiontitle"
                }, l.a.createElement("h2", null, e.title), l.a.createElement("span", null, e.title))
            };
            var C = function (e) {
                return l.a.createElement("div", {
                    className: "mi-service"
                }, l.a.createElement("span", {
                    className: "mi-service-icon"
                }, l.a.createElement(f.a, {
                    name: e.content.icon
                })), l.a.createElement("h5", null, e.content.title), l.a.createElement("p", null, e.content.details))
            };
            var D = function (e) {
                return l.a.createElement("div", {
                    className: "mi-testimonial-slideritem"
                }, l.a.createElement("div", {
                    className: "mi-testimonial"
                }, l.a.createElement("div", {
                    className: "mi-testimonial-content"
                }, l.a.createElement("p", null, e.content.content)), l.a.createElement("div", {
                    className: "mi-testimonial-author"
                }, l.a.createElement("h5", null, e.content.author.name), l.a.createElement("h6", null, e.content.author.designation))))
            };
            var P = function () {
                    var e = Object(n.useState)(!1),
                        a = Object(m.a)(e, 2),
                        t = a[0],
                        r = a[1],
                        i = Object(n.useState)(""),
                        c = Object(m.a)(i, 2),
                        o = c[0],
                        s = c[1],
                        d = Object(n.useState)([]),
                        p = Object(m.a)(d, 2),
                        E = p[0],
                        f = p[1],
                        b = Object(n.useState)([]),
                        g = Object(m.a)(b, 2),
                        h = g[0],
                        N = g[1];
                    return Object(n.useEffect)((function () {
                        u.a.get("/api/information").then((function (e) {
                            s(e.data)
                        })), u.a.get("/api/services").then((function (e) {
                            f(e.data)
                        })), u.a.get("/api/reviews").then((function (e) {
                            N(e.data)
                        }))
                    }), []), l.a.createElement(v, null, l.a.createElement("div", {
                        className: "mi-about-area mi-section mi-padding-top"
                    }, l.a.createElement("div", {
                        className: "container"
                    }, l.a.createElement(O, {
                        title: "About Me"
                    }), l.a.createElement("div", {
                        className: "row"
                    }, l.a.createElement("div", {
                        className: "col-lg-6"
                    }, l.a.createElement("div", {
                        className: "mi-about-image"
                    }, l.a.createElement("img", {
                        src: o.aboutImage,
                        alt: "about",
                        onClick: function () {
                            r({
                                toggler: !t
                            })
                        }
                    }), l.a.createElement("span", {
                        className: "mi-about-image-icon"
                    }, l.a.createElement(S.a, null)), l.a.createElement(j.a, {
                        toggler: t,
                        sources: [o.aboutImageLg]
                    }))), l.a.createElement("div", {
                        className: "col-lg-6"
                    }, l.a.createElement("div", {
                        className: "mi-about-content"
                    }, l.a.createElement("h3", null, "I am ", l.a.createElement("span", {
                        className: "color-theme"
                    }, o.name)), l.a.createElement("p", null, " WebScrapper "), l.a.createElement("ul", null, o.name ? l.a.createElement("li", null, l.a.createElement("b", null, "Full Name"), " ", o.name) : null, o.age ? l.a.createElement("li", null, l.a.createElement("b", null, "Age"), " ", o.age, " Years") : null, o.phone ? l.a.createElement("li", null, l.a.createElement("b", null, "Phone"), " ", o.phone) : null, o.nationality ? l.a.createElement("li", null, l.a.createElement("b", null, "Nationality"), " ", o.nationality) : null, o.language ? l.a.createElement("li", null, l.a.createElement("b", null, "Languages"), " ", o.language) : null, o.email ? l.a.createElement("li", null, l.a.createElement("b", null, "Email"), " ", o.email) : null, o.address ? l.a.createElement("li", null, l.a.createElement("b", null, "Address"), " ", o.address) : null, o.freelanceStatus ? l.a.createElement("li", null, l.a.createElement("b", null, "Freelance"), " ", o.freelanceStatus) : null), l.a.createElement("a", {
                        href: o.cvfile,
                        className: "mi-button"
                    }, "Download Resume")))))), l.a.createElement("div", {
                        className: "mi-service-area mi-section mi-padding-top"
                    }, l.a.createElement("div", {
                        className: "container"
                    }, l.a.createElement(O, {
                        title: "Services"
                    }), l.a.createElement("div", {
                        className: "mi-service-wrapper"
                    }, l.a.createElement("div", {
                        className: "row mt-30-reverse"
                    }, E.map((function (e) {
                        return l.a.createElement("div", {
                            className: "col-lg-4 col-md-6 col-12 mt-30",
                            key: e.title
                        }, l.a.createElement(C, {
                            content: e
                        }))
                    })))))), l.a.createElement("div", {
                        className: "mi-review-area mi-section mi-padding-top mi-padding-bottom"
                    }, l.a.createElement("div", {
                        className: "container"
                    }, l.a.createElement(O, {
                        title: "Reviews"
                    }), l.a.createElement("div", {
                        className: "row justify-content-center"
                    }, l.a.createElement("div", {
                        className: "col-12"
                    }, l.a.createElement(w.a, Object.assign({
                        className: "mi-testimonial-slider"
                    }, {
                        dots: !1,
                        infinite: !0,
                        arrows: !1,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        autoplay: !0,
                        autoplaySpeed: 6e3,
                        pauseOnHover: !0,
                        adaptiveHeight: !0,
                        responsive: [{
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }), h.map((function (e) {
                        return l.a.createElement(D, {
                            key: e.id,
                            content: e
                        })
                    }))))))))
                },
                I = t(18),
                A = t.n(I);
            var M = function (e) {
                return l.a.createElement("div", {
                    className: "mi-smalltitle"
                }, l.a.createElement("span", {
                    className: "mi-smalltitle-icon"
                }, l.a.createElement(f.a, {
                    name: e.icon
                })), l.a.createElement("h4", null, e.title))
            };
            var x = function (e) {
                return l.a.createElement("div", {
                    className: "mi-progress"
                }, l.a.createElement("h6", {
                    className: "mi-progress-title"
                }, e.title), l.a.createElement("div", {
                    className: "mi-progress-inner"
                }, l.a.createElement("div", {
                    className: "mi-progress-percentage"
                }, "".concat(e.percentage, "%")), l.a.createElement("div", {
                    className: "mi-progress-container"
                }, l.a.createElement("span", {
                    className: "mi-progress-active",
                    style: e.isVisible ? {
                        width: "".concat(e.percentage, "%")
                    } : {
                        width: 0
                    }
                }))))
            };
            var T = function (e) {
                var a = e.resumeData,
                    t = a.year,
                    n = a.position,
                    r = a.graduation,
                    i = a.university,
                    c = a.company,
                    o = a.details;
                return l.a.createElement("div", {
                    className: "mi-resume mt-30"
                }, l.a.createElement("div", {
                    className: "mi-resume-summary"
                }, l.a.createElement("h6", {
                    className: "mi-resume-year"
                }, t)), l.a.createElement("div", {
                    className: "mi-resume-details"
                }, l.a.createElement("h5", null, n || r), l.a.createElement("h6", {
                    className: "mi-resume-company"
                }, c || i), l.a.createElement("p", null, o)))
            };
            var _ = function () {
                    var e = Object(n.useState)([]),
                        a = Object(m.a)(e, 2),
                        t = a[0],
                        r = a[1],
                        i = Object(n.useState)([]),
                        c = Object(m.a)(i, 2),
                        o = c[0],
                        s = c[1],
                        d = Object(n.useState)([]),
                        p = Object(m.a)(d, 2),
                        E = p[0],
                        f = p[1];
                    return Object(n.useEffect)((function () {
                        u.a.get("/api/skills").then((function (e) {
                            r(e.data)
                        })), u.a.get("/api/experience").then((function (e) {
                            s(e.data.workingExperience), f(e.data.educationExperience)
                        }))
                    }), []), l.a.createElement(v, null, l.a.createElement("div", {
                        className: "mi-skills-area mi-section mi-padding-top"
                    }, l.a.createElement("div", {
                        className: "container"
                    }, l.a.createElement(O, {
                        title: "My Skills"
                    }), l.a.createElement("div", {
                        className: "mi-skills"
                    }, l.a.createElement("div", {
                        className: "row mt-30-reverse"
                    }, t.map((function (e) {
                        return l.a.createElement(A.a, {
                            once: !0,
                            className: "col-lg-6 mt-30",
                            key: e.title
                        }, l.a.createElement(x, {
                            title: e.title,
                            percentage: e.value
                        }))
                    })))))), l.a.createElement("div", {
                        className: "mi-resume-area mi-section mi-padding-top mi-padding-bottom"
                    }, l.a.createElement("div", {
                        className: "container"
                    }, l.a.createElement(O, {
                        title: "Resume"
                    }), l.a.createElement(M, {
                        title: "Working Experience",
                        icon: "briefcase"
                    }), l.a.createElement("div", {
                        className: "mi-resume-wrapper"
                    }, o.map((function (e) {
                        return l.a.createElement(T, {
                            key: e.id,
                            resumeData: e
                        })
                    }))), l.a.createElement("div", {
                        className: "mt-30"
                    }), l.a.createElement(M, {
                        title: "Educational Qualifications",
                        icon: "book"
                    }), l.a.createElement("div", {
                        className: "mi-resume-wrapper"
                    }, E.map((function (e) {
                        return l.a.createElement(T, {
                            key: e.id,
                            resumeData: e
                        })
                    }))))))
                },
                U = t(109);
            var B = function (e) {
                var a = Object(n.useState)(!1),
                    t = Object(m.a)(a, 2),
                    r = t[0],
                    i = t[1],
                    c = e.content,
                    o = c.title,
                    s = c.subtitle,
                    u = c.imageUrl,
                    d = c.largeImageUrl,
                    p = c.url;
                return l.a.createElement("div", {
                    className: e.isVisible ? "mi-portfolio mi-portfolio-visible" : "mi-portfolio"
                }, l.a.createElement("div", {
                    className: "mi-portfolio-image"
                }, l.a.createElement("img", {
                    src: u,
                    alt: o
                }), l.a.createElement("ul", null, d ? l.a.createElement("li", null, l.a.createElement("button", {
                    onClick: function () {
                        i(!r)
                    }
                }, l.a.createElement(S.a, null))) : null, p ? l.a.createElement("li", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: p
                }, l.a.createElement(U.a, null))) : null)), p ? l.a.createElement("h5", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: p
                }, o)) : l.a.createElement("h5", null, o), s ? l.a.createElement("h6", null, s) : null, d ? l.a.createElement(j.a, {
                    toggler: r,
                    sources: d
                }) : null)
            };
            var q = function () {
                    var e = Object(n.useState)([]),
                        a = Object(m.a)(e, 2),
                        t = a[0],
                        r = a[1];
                    return Object(n.useEffect)((function () {
                        u.a.get("/api/portfolios").then((function (e) {
                            r(e.data)
                        }))
                    })), l.a.createElement(v, null, l.a.createElement("div", {
                        className: "mi-about mi-section mi-padding-top mi-padding-bottom"
                    }, l.a.createElement("div", {
                        className: "container"
                    }, l.a.createElement(O, {
                        title: "Portfolios"
                    }), l.a.createElement("div", {
                        className: "row mt-30-reverse"
                    }, t.map((function (e) {
                        return l.a.createElement(A.a, {
                            once: !0,
                            offset: 200,
                            className: "col-lg-4 col-md-6 col-12 mt-30",
                            key: e.id
                        }, l.a.createElement(B, {
                            content: e
                        }))
                    }))))))
                },
                H = t(23),
                L = t(110),
                R = t(111),
                W = t(112);

            function G(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    a && (n = n.filter((function (a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }
            var V = function () {
                var e = Object(n.useState)([]),
                    a = Object(m.a)(e, 2),
                    t = a[0],
                    r = a[1],
                    i = Object(n.useState)([]),
                    c = Object(m.a)(i, 2),
                    o = c[0],
                    s = c[1],
                    d = Object(n.useState)([]),
                    p = Object(m.a)(d, 2),
                    E = p[0],
                    f = p[1],
                    b = Object(n.useState)({
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                    }),
                    g = Object(m.a)(b, 2),
                    h = g[0],
                    N = g[1],
                    y = Object(n.useState)(!1),
                    w = Object(m.a)(y, 2),
                    k = w[0],
                    j = w[1],
                    S = Object(n.useState)(""),
                    C = Object(m.a)(S, 2),
                    D = C[0],
                    P = C[1],
                    I = function (e) {
                        N(function (e) {
                            for (var a = 1; a < arguments.length; a++) {
                                var t = null != arguments[a] ? arguments[a] : {};
                                a % 2 ? G(t, !0).forEach((function (a) {
                                    Object(H.a)(e, a, t[a])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(t).forEach((function (a) {
                                    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                                }))
                            }
                            return e
                        }({}, h, Object(H.a)({}, e.currentTarget.name, e.currentTarget.value)))
                    };
                return Object(n.useEffect)((function () {
                    u.a.get("/api/contactinfo").then((function (e) {
                        r(e.data.phoneNumbers), s(e.data.emailAddress), f(e.data.address)
                    }))
                }), []), l.a.createElement(v, null, l.a.createElement("div", {
                    className: "mi-contact-area mi-section mi-padding-top mi-padding-bottom"
                }, l.a.createElement("div", {
                    className: "container"
                }, l.a.createElement(O, {
                    title: "Contact Me"
                }), l.a.createElement("div", {
                    className: "row"
                }, l.a.createElement("div", {
                    className: "col-lg-6"
                }, l.a.createElement("div", {
                    className: "mi-contact-formwrapper"
                }, l.a.createElement("h4", null, "Get In Touch"), l.a.createElement("form", {
                    action: "#",
                    className: "mi-form mi-contact-form",
                    onSubmit: function (e) {
                        e.preventDefault(), h.name ? h.email ? h.subject ? h.message ? (j(!1), P("You message has been sent!!!")) : (j(!0), P("Message is required")) : (j(!0), P("Subject is required")) : (j(!0), P("Email is required")) : (j(!0), P("Name is required"))
                    }
                }, l.a.createElement("div", {
                    className: "mi-form-field"
                }, l.a.createElement("label", {
                    htmlFor: "contact-form-name"
                }, "Enter your name*"), l.a.createElement("input", {
                    onChange: I,
                    type: "text",
                    name: "name",
                    id: "contact-form-name",
                    value: h.name
                })), l.a.createElement("div", {
                    className: "mi-form-field"
                }, l.a.createElement("label", {
                    htmlFor: "contact-form-email"
                }, "Enter your email*"), l.a.createElement("input", {
                    onChange: I,
                    type: "text",
                    name: "email",
                    id: "contact-form-email",
                    value: h.email
                })), l.a.createElement("div", {
                    className: "mi-form-field"
                }, l.a.createElement("label", {
                    htmlFor: "contact-form-subject"
                }, "Enter your subject*"), l.a.createElement("input", {
                    onChange: I,
                    type: "text",
                    name: "subject",
                    id: "contact-form-subject",
                    value: h.subject
                })), l.a.createElement("div", {
                    className: "mi-form-field"
                }, l.a.createElement("label", {
                    htmlFor: "contact-form-message"
                }, "Enter your Message*"), l.a.createElement("textarea", {
                    onChange: I,
                    name: "message",
                    id: "contact-form-message",
                    cols: "30",
                    rows: "6",
                    value: h.message
                })), l.a.createElement("div", {
                    className: "mi-form-field"
                }, l.a.createElement("button", {
                    className: "mi-button",
                    type: "submit"
                }, "Send Mail"))), k && D ? l.a.createElement("div", {
                    className: "alert alert-danger mt-4"
                }, D) : !k && D ? l.a.createElement("div", {
                    className: "alert alert-success mt-4"
                }, D) : null)), l.a.createElement("div", {
                    className: "col-lg-6"
                }, l.a.createElement("div", {
                    className: "mi-contact-info"
                }, t ? l.a.createElement("div", {
                    className: "mi-contact-infoblock"
                }, l.a.createElement("span", {
                    className: "mi-contact-infoblock-icon"
                }, l.a.createElement(L.a, null)), l.a.createElement("div", {
                    className: "mi-contact-infoblock-content"
                }, l.a.createElement("h6", null, "Phone"), t.map((function (e) {
                    return l.a.createElement("p", {
                        key: e
                    }, l.a.createElement("a", {
                        href: (a = e, a)
                    }, e));
                    var a
                })))) : null, o ? l.a.createElement("div", {
                    className: "mi-contact-infoblock"
                }, l.a.createElement("span", {
                    className: "mi-contact-infoblock-icon"
                }, l.a.createElement(R.a, null)), l.a.createElement("div", {
                    className: "mi-contact-infoblock-content"
                }, l.a.createElement("h6", null, "Email"), o.map((function (e) {
                    return l.a.createElement("p", {
                        key: e
                    }, l.a.createElement("a", {
                        href: "mailto:".concat(e)
                    }, e))
                })))) : null, t ? l.a.createElement("div", {
                    className: "mi-contact-infoblock"
                }, l.a.createElement("span", {
                    className: "mi-contact-infoblock-icon"
                }, l.a.createElement(W.a, null)), l.a.createElement("div", {
                    className: "mi-contact-infoblock-content"
                }, l.a.createElement("h6", null, "Address"), l.a.createElement("p", null, E))) : null))))))
            };
            var z = function () {
                    return l.a.createElement(c.a, null, l.a.createElement(o.c, null, l.a.createElement(o.a, {
                        path: "/",
                        exact: !0,
                        component: N
                    }), l.a.createElement(o.a, {
                        path: "/about",
                        component: P
                    }), l.a.createElement(o.a, {
                        path: "/resume",
                        component: _
                    }), l.a.createElement(o.a, {
                        path: "/portfolios",
                        component: q
                    }), l.a.createElement(o.a, {
                        path: "/contact",
                        component: V
                    })))
                },
                F = new(t(94))(t(3)),
                Y = {
                    name: "Qi Chen",
                    aboutContent: "I am a Data Engineer. I can provide clean code and valuable insight from data.",
                    phone: "",
                    nationality: "American/Chinese",
                    language: "English, Mandarin",
                    email: "",
                    address: "Brookyln, NY",
                    freelanceStatus: "Available",
                    socialLinks: {
                        facebook: "https://www.facebook.com/qchen125",
                        twitter: "https://twitter.com/qchen125",
                        linkedin: "https://www.linkedin.com/in/qifchen",
                        github: "https://github.com/swordwielder"
                    },
                    brandImage: "/images/headshot.jpg",
                    aboutImage: "/images/aboutSmall.jpg",
                    aboutImageLg: "/images/aboutLarge.jpg",
                    cvfile: "/files/Qi_Chen_Resume.pdf"
                },
                Q = [{
                    title: "API Development",
                    icon: "code",
                    details: "Web Scrapping"
                }],
                J = [{
                    id: 1,
                    content: "Solid",
                    author: {
                        name: "Rafi Chowdhury",
                        designation: "rafichowdhury.com"
                    }
                }],
                $ = [{
                    title: "JAVA",
                    value: 80
                }, {
                    title: "Python",
                    value: 80
                }, {
                    title: "C++",
                    value: 60
                }, {
                    title: "Bash",
                    value: 80
                }, {
                    title: "Linux",
                    value: 80
                }, {
                    title: "Hive",
                    value: 80
                }, {
                    title: "Hadoop",
                    value: 60
                }, {
                    title: "MapReduce",
                    value: 50
                }, {
                    title: "Sqoop",
                    value: 70
                }, {
                    title: "Oozie",
                    value: 60
                }, {
                    title: "AWS",
                    value: 70
                }, {
                    title: "VMware",
                    value: 70
                }, {
                    title: "API Development",
                    value: 70
                }, {
                    title: "Web Scraping",
                    value: 75
                }, {
                    title: "Data Visualization",
                    value: 70
                }, {
                    title: "Pandas",
                    value: 70
                }],
                K = [{
                    id: 1,
                    title: "Coinbase Web Scraper",
                    subtitle: "This is a WebScrapper written in Python to Scrape cryptocurrency Coin Data",
                    imageUrl: "/images/CoinbaseSmall.png",
                    largeImageUrl: ["/images/CoinbaseLarge.jpg"],
                    url: "https://github.com/swordwielder/pythonwebscrapper"
                }],
                X = {
                    workingExperience: [{
                        id: 1,
                        year: "2019 - Present",
                        position: "Independent Developer",
                        details: " Created a Discord bot that gives live weather, crypto and stock data         through API calls in Python         \u2022 Developed a REST API for returning sports statistics and betting odds.         \u2022 Implemented chenpost.com on an AWS S3 Bucket to allow clients         explore and inquire on potential partnerships."
                    }, {
                        id: 2,
                        year: "2018 - 2019",
                        position: "Data Engineer",
                        company: "Vurteau",
                        details: " \u2022Developed an API to distribute advertising creative data from  S3 Bucket, with Cache to optimize server load usage. (Deployed on  AWS EC2) \n  \t \n  \n         \u2022 Utilized pandas and numpy to perform data analysis and modeling         on advertising campaigns performance for new insight.         \u2022 Contributed Ideas to Vurteau\u2019s business Model that resulted in our         initial $500k funding.         \u2022 Provided research on various web technologies and costs that would         help optimize the technological procedures. (AWS Media Tailor for ad         insertion, S3 for Storage, EC2 for running Server)"
                    }, {
                        id: 3,
                        year: "2015 - 2018",
                        position: "Product Engineer & Content Manager",
                        company: "Dahua Tech USA Inc.",
                        details: "\u2022 Updated and maintained Dahuawiki.com to provide better technical         support to the customers including adding YouTube tutorials with         7000 daily hits on website tracked through Google Analytics.         \u2022 Hardware testing/support for clients including but not limited to         NVRs, DVRs, IP Cameras, and Analog Cameras via Salesforce."
                    }, {
                        id: 4,
                        year: "2014 - 2015",
                        position: "Computer Science Tutor",
                        company: "Computer Science Learning Center, University of Memphis",
                        details: " Helped students with coursework and checked coding errors         \u2022 Taught & Mentored high school students with interests in Computer         Science in the field of game development using Ren\u2019Py."
                    }, {
                        id: 5,
                        year: "2013 - 2015",
                        position: "Technical Consultant",
                        company: "ITS Service Desk, University of Memphis",
                        details: "\u2022 Assisted campus students with troubleshooting U of M services         including E-learn, UMDrive, portal via Helpdesk using campus         SupportSuite software"
                    }],
                    educationExperience: [{
                        id: 1,
                        year: "2019",
                        graduation: "Data Engineering Bootcamp",
                        university: "Platform by Per Scholas (Cognizant)",
                        details: "Furthered understanding of Big         Data and Hadoop technologies.         Learned how to extract, scrub,         and manipulate real-time and         warehouse data using SQL         & Java."
                    }, {
                        id: 2,
                        year: "2011 - 2015",
                        graduation: "BS in Computer Science",
                        university: "University of Memphis",
                        details: "Bachelor's degree in Computer Science at the University of Memphis with Dean's list."
                    }]
                },
                Z = {
                    phoneNumbers: ["+1646-598-1337"],
                    emailAddress: ["qchen125@gmail.com"],
                    address: "Brooklyn, NY"
                };
            F.onGet("/api/information").reply((function (e) {
                return [200, Y]
            })), F.onGet("/api/services").reply((function (e) {
                return [200, Q]
            })), F.onGet("/api/reviews").reply((function (e) {
                return [200, J]
            })), F.onGet("/api/skills").reply((function (e) {
                return [200, $]
            })), F.onGet("/api/portfolios").reply((function (e) {
                return [200, K]
            })), F.onGet("/api/experience").reply((function (e) {
                return [200, X]
            })), F.onGet("/api/contactinfo").reply((function (e) {
                return [200, Z]
            })), F.onAny().passThrough();
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            i.a.render(l.a.createElement(z, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
                e.unregister()
            }))
        },
        45: function (e, a, t) {
            e.exports = t(107)
        },
        53: function (e, a, t) {},
        54: function (e, a, t) {}
    },
    [
        [45, 1, 2]
    ]
]);
//# sourceMappingURL=main.2b11e5e9.chunk.js.map
