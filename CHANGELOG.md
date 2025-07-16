# Changelog

## [0.2.0] - 2025-07-16

### Added
- **File streaming**: New method `res.sendFile()` to send files via stream.
- **Redirects**: Method `res.redirect(url)` for answers 302.
- **HTTP Methods**: Support for `PUT` and `DELETE` on the router.
- **Modern parsing**: Replacement of `url.parse` for the `URL` native.

### Fixed
- Route isolation (global state correction in `router-core.js`).

### Updated
- Documentation in README.md (new examples).

---

## [0.2.0] - 2025-07-16
- Initial release: Basic routing, middleware, and parsers.